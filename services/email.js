import nodemailer from 'nodemailer';
import wordpress from 'wordpress.config';

const { EMAIL_HOST, EMAIL_PORT, EMAIL_AUTH_USER, EMAL_AUTH_PASS } = process.env;

const RECIVER = "jarekarmatys@gmail.com";

export const sendEmail = async (message) => {

    let transporter = nodemailer.createTransport({
        host: EMAIL_HOST,
        port: EMAIL_PORT,
        secure: true,
        auth: {
            user: EMAIL_AUTH_USER,
            pass: EMAL_AUTH_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const payload = {
        from: `${wordpress.pageName} <${EMAIL_AUTH_USER}>`,
        to: RECIVER, // list of receivers
        subject: "[Formularz kontaktowy] Wiadomość z formularza kontaktowego", // Subject line
        html: `
            Wiadomość: ${message}
        `
    };

    let result = await transporter.sendMail(payload);
    
    return result;
}