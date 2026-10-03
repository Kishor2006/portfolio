/**
 * Email Test Script
 * 
 * Run this to test if email delivery is working:
 * node test-email.js
 */

import { sendEmail } from './services/emailService.js';
import dotenv from 'dotenv';

dotenv.config();

const testEmail = async () => {
  console.log('📧 Testing email delivery...\n');

  console.log('Configuration:');
  console.log('- SMTP_HOST:', process.env.SMTP_HOST || '❌ Not set');
  console.log('- SMTP_PORT:', process.env.SMTP_PORT || '❌ Not set');
  console.log('- SMTP_USER:', process.env.SMTP_USER || '❌ Not set');
  console.log('- SMTP_PASS:', process.env.SMTP_PASS ? '✅ Set (hidden)' : '❌ Not set');
  console.log('- RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL || '❌ Not set');
  console.log('\n');

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('❌ Email configuration incomplete!');
    console.error('\nPlease configure the following in backend/.env:');
    console.error('- SMTP_HOST=smtp.gmail.com');
    console.error('- SMTP_PORT=587');
    console.error('- SMTP_USER=kishorhcs@gmail.com');
    console.error('- SMTP_PASS=your-16-character-app-password');
    console.error('- RECIPIENT_EMAIL=kishorhcs@gmail.com');
    console.error('\nSee EMAIL_SETUP_GUIDE.md for instructions.\n');
    process.exit(1);
  }

  try {
    const result = await sendEmail({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test email from your portfolio contact form. If you receive this, email delivery is working correctly!'
    });

    if (result.sent) {
      console.log('✅ Email sent successfully!');
      console.log(`📬 Check your inbox at: ${process.env.RECIPIENT_EMAIL}`);
      console.log('\nIf you don\'t see it:');
      console.log('1. Check your spam folder');
      console.log('2. Wait a few minutes (delivery can take 1-2 minutes)');
      console.log('3. Verify RECIPIENT_EMAIL in .env is correct');
    } else {
      console.log('⚠️  Email not sent (service not configured)');
    }
  } catch (error) {
    console.error('❌ Email test failed!');
    console.error('\nError:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.error('\n💡 Solution: You need to use a Gmail App Password, not your regular password.');
      console.error('   See EMAIL_SETUP_GUIDE.md for instructions.\n');
    }
  }
};

testEmail();
