'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  ContactFormData,
  contactFormSchema,
} from '@/src/lib/zod/contact-form.schema';
import { useCallback } from 'react';

interface Props {
  handleSubmit: (data: ContactFormData) => Promise<void>;
  clearAfterSubmit?: boolean;
}

export function ContactForm({
  handleSubmit,
  clearAfterSubmit = false,
}: Readonly<Props>) {
  const {
    register,
    handleSubmit: formhandleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      await handleSubmit(data);
      if (clearAfterSubmit) {
        reset();
      }
    },
    [handleSubmit, reset, clearAfterSubmit],
  );

  return (
    <form
      onSubmit={formhandleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">Nome *</label>

          <input
            id="firstName"
            type="text"
            placeholder="Nome"
            {...register('firstName')}
            className="border border-neutral-700 bg-neutral-900 rounded-lg px-4 py-3 outline-none focus:border-(--primary-color)"
          />

          {errors.firstName && (
            <span className="text-sm text-red-500">
              {errors.firstName.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName">Sobrenome *</label>

          <input
            id="lastName"
            type="text"
            placeholder="Sobrenome"
            {...register('lastName')}
            className="border border-neutral-700 bg-neutral-900 rounded-lg px-4 py-3 outline-none focus:border-(--primary-color)"
          />

          {errors.lastName && (
            <span className="text-sm text-red-500">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">E-mail *</label>

          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register('email')}
            className="border border-neutral-700 bg-neutral-900 rounded-lg px-4 py-3 outline-none focus:border-(--primary-color)"
          />

          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="whatsapp">Whatsapp *</label>

          <input
            id="whatsapp"
            type="text"
            placeholder="(67) 00000-0000"
            {...register('whatsapp')}
            className="border border-neutral-700 bg-neutral-900 rounded-lg px-4 py-3 outline-none focus:border-(--primary-color)"
          />

          {errors.whatsapp && (
            <span className="text-sm text-red-500">
              {errors.whatsapp.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company">Empresa</label>

        <input
          id="company"
          type="text"
          placeholder="Digite o nome da empresa (opcional)"
          {...register('company')}
          className="border border-neutral-700 bg-neutral-900 rounded-lg px-4 py-3 outline-none focus:border-(--primary-color)"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message">Mensagem</label>

        <textarea
          id="message"
          rows={5}
          placeholder="Digite sua mensagem (opcional)"
          {...register('message')}
          className="border border-neutral-700 bg-neutral-900 rounded-lg px-4 py-3 outline-none resize-none focus:border-(--primary-color)"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-(--primary-color) hover:bg-(--primary-color-dark) transition text-white font-semibold rounded-lg py-3 px-5 disabled:opacity-50 cursor-pointer"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
