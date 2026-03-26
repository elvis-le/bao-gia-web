import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending emails
  app.post('/api/send-consultation', async (req, res) => {
    const { name, phone, email, message, quotationData } = req.body;

    console.log('Received consultation request:', { name, email, phone });

    // Check for SMTP credentials
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || '465';
    const SMTP_USER = process.env.SMTP_USER || 'lnqk1013@gmail.com';
    const SMTP_PASS = process.env.SMTP_PASS || 'jdueopwywgjwbcxu';

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.warn('SMTP credentials missing. Logging request to console instead.');
      return res.status(200).json({ 
        success: true, 
        message: 'Request received (Simulation mode - SMTP not configured)',
        data: { name, email, phone, message }
      });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT),
        secure: parseInt(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const mailOptions = {
        from: `"NASANI Website" <${SMTP_USER}>`,
        to: 'khanhle03.nasani@gmail.com',
        subject: `Yêu cầu tư vấn mới từ ${name}`,
        html: `
          <h2>Yêu cầu tư vấn mới</h2>
          <p><strong>Họ tên:</strong> ${name}</p>
          <p><strong>Số điện thoại:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Lời nhắn:</strong> ${message || 'Không có'}</p>
          <hr />
          <h3>Thông tin báo giá đính kèm:</h3>
          <p><strong>Loại website:</strong> ${quotationData?.type || 'N/A'}</p>
          <p><strong>Số ngôn ngữ:</strong> ${quotationData?.languages || 1}</p>
          <p><strong>Tính năng:</strong> ${quotationData?.features?.join(', ') || 'Không có'}</p>
          <p><strong>Tổng cộng:</strong> ${quotationData?.total?.toLocaleString('vi-VN')} VNĐ</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to khanhle03.nasani@gmail.com');
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
