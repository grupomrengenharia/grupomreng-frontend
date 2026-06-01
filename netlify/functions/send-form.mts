import { type Config } from '@netlify/functions';
import Mailgun from 'mailgun.js';
import formData from 'form-data';

const handler = async (req: Request) => {
  try {
    const { firstName, lastName, message, email, company, whatsapp } =
      await req.json();

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: String(Netlify.env.get('MAILGUN_SENDING_API_KEY')),
    });

    await mg.messages.create(
      String(Netlify.env.get('MAILGUN_PRODUCTION_DOMAIN')),
      {
        from: 'Grupo MR Engenharia - Contato <no-reply@grupomreng.com.br>',
        to: [Netlify.env.get('EMAIL_TO')!],
        subject: `Orçamento - Contato de ${firstName}`,
        text: `Nome: ${firstName} ${lastName}\nEmpresa: ${company}\nEmail: ${email}\nTelefone: ${whatsapp}\nMensagem: ${message}`,
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
  path: '/send-form',
};
