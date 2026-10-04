import { sendEmail } from '../services/emailService.js';

export const handleContactMessage = async (req, res) => {
  const startTime = Date.now();
  
  try {
    const { name, email, message } = req.body;

    console.log('📨 Contact request received:', { name, email, timestamp: new Date().toISOString() });

    // Validation
    if (!name || !email || !message) {
      console.log('❌ Validation failed: Missing fields');
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed: Invalid email format');
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Check SMTP configuration
    const smtpConfigured = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
    console.log('🔧 SMTP configured:', smtpConfigured);

    // Send email with timeout
    try {
      const emailPromise = sendEmail({ name, email, message });
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Email timeout')), 25000)
      );
      
      const emailResult = await Promise.race([emailPromise, timeoutPromise]);
      
      if (emailResult.sent) {
        const duration = Date.now() - startTime;
        console.log(`✅ Email sent successfully in ${duration}ms:`, {
          name,
          email,
          timestamp: new Date().toISOString()
        });

        return res.json({
          success: true,
          message: 'Thank you for your message! I will get back to you soon.'
        });
      } else {
        // Email service not configured but logged
        console.log('⚠️  Email service not configured. Contact logged:', {
          name,
          email,
          timestamp: new Date().toISOString()
        });

        return res.json({
          success: true,
          message: 'Thank you for your message! I will get back to you soon.'
        });
      }
    } catch (emailError) {
      const duration = Date.now() - startTime;
      console.error(`❌ Email delivery failed after ${duration}ms:`, {
        error: emailError.message,
        code: emailError.code,
        name,
        email
      });
      
      return res.status(500).json({
        success: false,
        message: 'Unable to send message. Please try again or email me directly at kishorhcs@gmail.com'
      });
    }
  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`❌ Contact form error after ${duration}ms:`, error);
    res.status(500).json({
      success: false,
      message: 'Unable to send message. Please try again.'
    });
  }
};
