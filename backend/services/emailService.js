/**
 * Email service for sending contact form submissions using SendGrid HTTP API
 * 
 * Configuration required in .env:
 * - SENDGRID_API_KEY=your-sendgrid-api-key
 * - SENDER_EMAIL=verified-sender@yourdomain.com (or kishorhcs@gmail.com if verified)
 * - RECIPIENT_EMAIL=kishorhcs@gmail.com
 * 
 * To get SendGrid API Key:
 * 1. Sign up at: https://signup.sendgrid.com/
 * 2. Go to Settings → API Keys
 * 3. Create API Key with "Mail Send" permission
 * 4. Copy the key and add to .env as SENDGRID_API_KEY
 * 
 * To verify sender email:
 * 1. Go to Settings → Sender Authentication
 * 2. Verify a Single Sender (use kishorhcs@gmail.com)
 * 3. Check your email and click verification link
 */

import sgMail from '@sendgrid/mail';

export const sendEmail = async ({ name, email, message }) => {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const SENDER_EMAIL = process.env.SENDER_EMAIL || 'kishorhcs@gmail.com';
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'kishorhcs@gmail.com';

  // If SendGrid is not configured, log and return success anyway
  if (!SENDGRID_API_KEY) {
    console.log('⚠️  SendGrid not configured. Contact form submission logged:');
    console.log({ name, email, message: message.substring(0, 100), timestamp: new Date().toISOString() });
    return { success: true, logged: true, sent: false };
  }

  try {
    // Configure SendGrid with API key
    sgMail.setApiKey(SENDGRID_API_KEY);

    // Email content
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const mailOptions = {
      to: RECIPIENT_EMAIL,
      from: SENDER_EMAIL, // Must be verified in SendGrid
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

    // Send email via SendGrid HTTP API
    const response = await sgMail.send(mailOptions);

    console.log('✅ Email sent successfully via SendGrid:', {
      statusCode: response[0].statusCode,
      recipient: RECIPIENT_EMAIL,
      from: name,
      timestamp: new Date().toISOString()
    });

    return { success: true, sent: true, messageId: response[0].headers['x-message-id'] };
  } catch (error) {
    // Log error but don't crash
    console.error('❌ SendGrid email sending failed:', {
      error: error.message,
      code: error.code,
      response: error.response?.body
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
