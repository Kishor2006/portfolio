/**
 * Email service for sending contact form submissions using Resend API
 * 
 * Configuration required in .env:
 * - RESEND_API_KEY=re_xxxxxxxxxx
 * - SENDER_EMAIL=onboarding@resend.dev (or your verified domain email)
 * - RECIPIENT_EMAIL=kishorhcs@gmail.com
 * 
 * Resend Free Plan: 3,000 emails/month, 100 emails/day
 * Perfect for portfolio contact forms
 */

import { Resend } from 'resend';

export const sendEmail = async ({ name, email, message }) => {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const SENDER_EMAIL = process.env.SENDER_EMAIL || 'onboarding@resend.dev';
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'kishorhcs@gmail.com';

  // If Resend is not configured, log and return error
  if (!RESEND_API_KEY) {
    console.log('⚠️  Resend not configured. Contact form submission logged:');
    console.log({ name, email, message: message.substring(0, 100), timestamp: new Date().toISOString() });
    return { success: false, logged: true, sent: false };
  }

  try {
    // Initialize Resend with API key
    const resend = new Resend(RESEND_API_KEY);

    // Email content
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const emailData = {
      from: SENDER_EMAIL,
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

    // Send email via Resend API
    const response = await resend.emails.send(emailData);

    console.log('✅ Email sent successfully via Resend:', {
      emailId: response.data?.id,
      recipient: RECIPIENT_EMAIL,
      from: name,
      timestamp: new Date().toISOString()
    });

    return { success: true, sent: true, emailId: response.data?.id };
  } catch (error) {
    // Log error details
    console.error('❌ Resend email sending failed:', {
      error: error.message,
      name: error.name,
      statusCode: error.statusCode
    });
    
    // Re-throw error to be handled by controller
    throw error;
  }
};
