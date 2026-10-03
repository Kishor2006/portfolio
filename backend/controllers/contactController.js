import { sendEmail } from '../services/emailService.js';

export const handleContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Send email
    try {
      const emailResult = await sendEmail({ name, email, message });
      
      if (emailResult.sent) {
        console.log('✅ Contact form submission successful:', {
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
      console.error('❌ Email delivery failed:', emailError);
      
      return res.status(500).json({
        success: false,
        message: 'Unable to send message. Please try again or email me directly at kishorhcs@gmail.com'
      });
    }
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Unable to send message. Please try again.'
    });
  }
};
