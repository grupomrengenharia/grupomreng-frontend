import type { Config } from '@netlify/functions';
import Mailgun from 'mailgun.js';
import formData from 'form-data';

const handler = async (req: Request) => {
  try {
    const { name, email, message, phone } = await req.json();

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: String(Netlify.env.get('MAILGUN_API_KEY')),
    });

    await mg.messages.create(String(Netlify.env.get('EMAIL_DOMAIN')), {
      from: 'Grupo MR Engenharia - Contato <no-reply@grupomreng.com.br>',
      to: ['mr.consultoriias@email.com'],
      subject: `Contato de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
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
  path: '/send-mail',
};
