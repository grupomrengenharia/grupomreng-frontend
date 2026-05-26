import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),

  lastName: z.string().min(2, 'O sobrenome deve ter pelo menos 2 caracteres'),

  email: z.string().email('E-mail inválido'),

  whatsapp: z
    .string()
    .min(10, 'Whatsapp inválido')
    .max(15, 'Whatsapp inválido'),

  company: z.string().optional(),

  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
