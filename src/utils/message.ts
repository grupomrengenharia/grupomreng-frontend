import { CartProduct, Service } from '../@types';
import { ContactFormData } from '../lib';

export function formatWhatsAppMessage(
  customerData: ContactFormData,
  products: CartProduct[],
  services: Service[],
) {
  const { firstName, lastName, email, whatsapp, company, message } =
    customerData;

  const servicesText =
    services.length > 0
      ? services.map((service) => `• ${service.title}`).join('\n')
      : 'Nenhum serviço selecionado';

  const productsText =
    products.length > 0
      ? products
          .map((product) =>
            [
              `• ${product.name}`,
              `  Quantidade: ${product.quantity}`,
              `  Código: ${product.variationCode}`,
            ].join('\n'),
          )
          .join('\n\n')
      : 'Nenhum produto selecionado';

  const text = `
    *Nova solicitação de orçamento*

    *Cliente*
    Nome: ${firstName} ${lastName}
    Email: ${email}
    WhatsApp: ${whatsapp}
    ${company ? `Empresa: ${company}` : ''}

    *Serviços de Interesse*
    ${servicesText}

    *Produtos*
    ${productsText}

    *Mensagem*
    ${message || 'Não informada'}
    `.trim();

  return `https://wa.me/5567991170917?text=${encodeURIComponent(text)}`;
}
