import { useCallback } from 'react';
import { ContactForm } from '../contact-form';
import { SectionTitle } from '../section-title';
import { api, ContactFormData } from '@/src/lib';
import { toast } from 'sonner';

export function ContactFormSection() {
  const handleSubmit = useCallback(async (data: ContactFormData) => {
    try {
      await api.post('/contact-form', {
        customerData: data,
      });

      toast.info('Pronto! Recebemos seu contato e retornaremos em breve.');
    } catch {
      toast.error(
        'Houve um erro ao processar sua solicitação. Tente novamente em alguns segundos',
      );
    }
  }, []);

  return (
    <section className="flex flex-col gap-4">
      <SectionTitle title="Fale conosco" />
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="space-y-6">
          <p>
            Ficou com alguma dúvida ou deseja um atendimento personalizado?
            Entre em contato com nosso time agora mesmo!
          </p>
          <div className="space-y-6">
            <h3>ATENDIMENTO ESPECIALIZADO PARA SUA EMPRESA</h3>
            <p>
              Trabalhamos com soluções completas em segurança e prevenção,
              oferecendo suporte técnico, atendimento personalizado e
              compromisso com a qualidade em cada projeto.
            </p>
            <ul>
              <li>✔ Equipe qualificada</li>
              <li>✔ Atendimento ágil</li>
              <li>✔ Soluções sob medida</li>
              <li>✔ Suporte especializado</li>
            </ul>
            <span>
              Preencha o formulário e receba um orçamento sem compromisso.
            </span>
          </div>
        </div>
        <div className="bg-black/65 py-10 px-6 rounded-md">
          <ContactForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
}
