// src/mailer.js
import nodemailer from 'nodemailer';

export const sendMail = async ({ name, email, message }) => {
  try {
    // Configuración del transporte
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Puedes usar el servicio de correo que prefieras
      auth: {
        user: process.env.EMAIL_USER, // Asegúrate de configurar estas variables de entorno
        pass: process.env.EMAIL_PASS,
      },
    });

    // Opciones del correo
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Donde recibirás los correos
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Enviar el correo
    let info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    throw new Error('No se pudo enviar el correo.');
  }
};
