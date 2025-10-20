"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Email inválido",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Mensagem inválida",
    };
  }

  let data;
  try {
    console.log("🚀 Iniciando envio de email...");
    console.log("📧 Para:", "hchristofer130@gmail.com");
    console.log("📝 De:", senderEmail);
    console.log("🔑 API Key definida:", !!process.env.RESEND_API_KEY);
    
    data = await resend.emails.send({
      from: "Portfólio Christofer <onboarding@resend.dev>",
      to: "hchristofer130@gmail.com",
      subject: "Nova mensagem do portfólio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
    
    console.log("✅ Email enviado com sucesso!");
    console.log("📊 Resposta da API:", JSON.stringify(data, null, 2));
    
  } catch (error: unknown) {
    console.error("❌ Erro ao enviar email:", error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
