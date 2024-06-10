import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendContactUsForm = (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'bilalmustafa270@gmail.com, akifadnan2003@gmail.com',
        subject: `Dijital Dokuma - Contact Us Form Submission from ${name}`,
        text: 'Email: ' + email
            + '\nMessage: ' + message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
};