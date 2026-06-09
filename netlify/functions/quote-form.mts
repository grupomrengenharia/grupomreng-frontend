import { type Config } from '@netlify/functions';
import Mailgun from 'mailgun.js';
import formData from 'form-data';

const handler = async (req: Request) => {
  try {
    const { customerData, cartData } = await req.json();

    const { firstName, lastName, company, email, whatsapp, message } =
      customerData;
    const { products, services } = cartData;

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: String(Netlify.env.get('MAILGUN_SENDING_API_KEY')),
    });

    const productsHtml = products
      .map(
        (product: {
          name: string;
          variationCode: string | null;
          quantity: number;
          id: string;
        }) => `
      <tr>
        <td>${product.name}</td>
        <td>${product.variationCode ?? '-'}</td>
        <td align="center">${product.quantity}</td>
      </tr>
    `,
      )
      .join('');

    const servicesHtml = services
      .map(
        (service: { name: string; id: string }) => `
      <tr>
        <td>${service.name}</td>
        <td>${service.id}</td>
      </tr>
    `,
      )
      .join('');

    const html = template
      .replace('{{firstName}}', firstName)
      .replace('{{lastName}}', lastName)
      .replace('{{company}}', company || 'Sem empresa informada')
      .replace('{{email}}', email)
      .replace('{{whatsapp}}', whatsapp)
      .replace('{{message}}', message ?? 'Sem mensagem informada')
      .replace('{{products}}', productsHtml)
      .replace('{{services}}', servicesHtml);

    await mg.messages.create(
      String(Netlify.env.get('MAILGUN_PRODUCTION_DOMAIN')),
      {
        from: 'Grupo MR Engenharia - Contato <no-reply@grupomreng.com.br>',
        to: [Netlify.env.get('EMAIL_TO')!],
        subject: `Orçamento - Contato de ${firstName}`,
        html,
      },
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error('Error sending email: ', err);

    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default handler;

export const config: Config = {
  path: '/quote-form',
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
              <h1 style="margin: 0; font-size: 24px">Novo Pedido Recebido</h1>
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

              <h2 style="margin-top: 32px">Produtos</h2>

              <table
                width="100%"
                cellpadding="10"
                cellspacing="0"
                style="
                  border-collapse: collapse;
                  border: 1px solid #e5e7eb;
                "
              >
                <thead>
                  <tr style="background: #f3f4f6">
                    <th align="left">Produto</th>
                    <th align="left">Variação</th>
                    <th align="center">Quantidade</th>
                  </tr>
                </thead>

                <tbody>
                  {{products}}
                </tbody>
              </table>

              <h2 style="margin-top: 32px">Serviços</h2>

              <table
                width="100%"
                cellpadding="10"
                cellspacing="0"
                style="
                  border-collapse: collapse;
                  border: 1px solid #e5e7eb;
                "
              >
                <thead>
                  <tr style="background: #f3f4f6">
                    <th align="left">Serviço</th>
                    <th align="left">ID</th>
                  </tr>
                </thead>

                <tbody>
                  {{services}}
                </tbody>
              </table>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
