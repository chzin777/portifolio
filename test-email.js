// Script de teste para verificar se o Resend está funcionando
import { Resend } from 'resend';

const resend = new Resend('re_QKertyLT_L4pVWXDBQpKoqouNB2AHGdi5');

async function testEmail() {
  try {
    console.log('Testando envio de email...');
    
    const data = await resend.emails.send({
      from: 'Portfólio Teste <onboarding@resend.dev>',
      to: 'hchristofer130@gmail.com',
      subject: 'Teste de Email',
      html: '<p>Este é um email de <strong>teste</strong>!</p>'
    });

    console.log('Email enviado com sucesso:', data);
  } catch (error) {
    console.error('Erro ao enviar email:', error);
  }
}

testEmail();