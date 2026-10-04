/**
 * Email service for sending contact form submissions using Nodemailer with Gmail SMTP
 * 
 * Configuration required in .env:
 * - SMTP_HOST=smtp.gmail.com
 * - SMTP_PORT=587
 * - SMTP_USER=your-gmail@gmail.com
 * - SMTP_PASS=your-app-password (NOT your regular Gmail password!)
 * - RECIPIENT_EMAIL=kishorhcs@gmail.com
 * 
 * To generate Gmail App Password:
 * 1. Go to Google Account settings: https://myaccount.google.com/
 * 2. Security → 2-Step Verification (must be enabled)
 * 3. App passwords → Select "Mail" and "Windows Computer"
 * 4. Copy the 16-character password and add to .env as SMTP_PASS
 */

import nodemailer from 'nodemailer';

export const sendEmail = async ({ name, email, message }) => {
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'kishorhcs@gmail.com';

  // If email service is not configured, log and return success anyway
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.log('⚠️  Email service not configured. Contact form submission logged:');
    console.log({ name, email, message: message.substring(0, 100), timestamp: new Date().toISOString() });
    return { success: true, logged: true, sent: false };
  }

  try {
    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      // Add timeout to prevent hanging
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Email content
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const mailOptions = {
      from: `"Portfolio Contact Form" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: 'New Portfolio Contact Message',
      text: `
New Portfolio Contact Message

Name: ${name}
Email: ${email}
Message: ${message}
Submitted At: ${timestamp}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
          <h2 style="color: #00d4ff; border-bottom: 2px solid #00d4ff; padding-bottom: 10px;">
            New Portfolio Contact Message
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;">
              <strong style="color: #333; display: inline-block; width: 140px;">Name:</strong>
              <span style="color: #555;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #333; display: inline-block; width: 140px;">Email:</strong>
              <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #333; display: inline-block; width: 140px;">Submitted At:</strong>
              <span style="color: #555;">${timestamp}</span>
            </p>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
              <strong style="color: #333; display: block; margin-bottom: 10px;">Message:</strong>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; color: #333; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f7ff; border-left: 4px solid #00d4ff; border-radius: 5px;">
            <p style="margin: 0; color: #555; font-size: 14px;">
              💡 <strong>Quick Reply:</strong> Simply reply to this email to respond directly to ${name}.
            </p>
          </div>
        </div>
      `,
    };

    // Send email with timeout
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully:', {
      messageId: info.messageId,
      recipient: RECIPIENT_EMAIL,
      from: name,
      timestamp: new Date().toISOString()
    });

    return { success: true, sent: true, messageId: info.messageId };
  } catch (error) {
    // Log error but don't crash - SMTP might be blocked on hosting platform
    console.error('❌ Email sending failed (SMTP might be blocked):', {
      error: error.message,
      code: error.code
    });
    
    // Log contact submission even if email fails
    console.log('📝 Contact logged despite email failure:', {
      name,
      email,
      message: message.substring(0, 100),
      timestamp: new Date().toISOString()
    });
    
    // Return success anyway - contact is logged
    return { success: true, sent: false, logged: true };
  }
};
