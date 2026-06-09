import { type Config } from '@netlify/functions';
import Mailgun from 'mailgun.js';
import formData from 'form-data';

const handler = async (req: Request) => {
  try {
    const { customerData } = await req.json();

    const { firstName, lastName, company, email, whatsapp, message } =
      customerData;

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: String(process.env.MAILGUN_SENDING_API_KEY),
    });

    const html = template
      .replace('{{firstName}}', firstName)
      .replace('{{lastName}}', lastName)
      .replace('{{company}}', company || 'Sem empresa informada')
      .replace('{{email}}', email)
      .replace('{{whatsapp}}', whatsapp)
      .replace('{{message}}', message ?? 'Sem mensagem informada');

    await mg.messages.create(String(process.env.MAILGUN_PRODUCTION_DOMAIN), {
      from: 'Grupo MR Engenharia - Contato <no-reply@grupomreng.com.br>',
      to: [process.env.EMAIL_TO!],
      subject: `Contato de ${firstName}`,
      html,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error('Error sending contact email: ', err);

    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default handler;

export const config: Config = {
  path: '/contact-form',
};

const template = `html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Novo Pedido</title>
  </head>
  <body
    style="
      margin: 0;
      padding: 24px;
      background-color: #f5f5f5;
      font-family: Arial, Helvetica, sans-serif;
      color: #333;
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="max-width: 800px; margin: 0 auto"
    >
      <tr>
        <td>
          <div
            style="
              background: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              border: 1px solid #e5e5e5;
            "
          >
            <div
              style="
                background: #111827;
                color: #ffffff;
                padding: 24px;
              "
            >
              <h1 style="margin: 0; font-size: 24px">Novo Contato Recebido</h1>
            </div>

            <div style="padding: 24px">
              <h2 style="margin-top: 0">Dados do Cliente</h2>

              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td><strong>Nome:</strong></td>
                  <td>{{firstName}} {{lastName}}</td>
                </tr>

                <tr>
                  <td><strong>Empresa:</strong></td>
                  <td>{{company}}</td>
                </tr>

                <tr>
                  <td><strong>E-mail:</strong></td>
                  <td>{{email}}</td>
                </tr>

                <tr>
                  <td><strong>WhatsApp:</strong></td>
                  <td>{{whatsapp}}</td>
                </tr>
              </table>

              <h2 style="margin-top: 32px">Mensagem</h2>

              <div
                style="
                  background: #f9fafb;
                  border: 1px solid #e5e7eb;
                  border-radius: 8px;
                  padding: 16px;
                "
              >
                {{message}}
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
