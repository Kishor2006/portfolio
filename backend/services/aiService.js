import axios from 'axios';

/**
 * Get AI response using configured AI provider
 * This is a flexible service that can be configured to use different AI APIs
 * Current implementation uses a fallback to rule-based responses
 * 
 * To integrate a real AI API:
 * 1. Set AI_API_KEY in .env
 * 2. Set AI_API_URL (e.g., OpenAI, Anthropic, etc.)
 * 3. Uncomment and configure the API call below
 */

export const getAIResponse = async (userMessage, context) => {
  const AI_API_KEY = process.env.AI_API_KEY;
  const AI_API_URL = process.env.AI_API_URL;
  const AI_MODEL = process.env.AI_MODEL || 'gpt-3.5-turbo';

  // If AI API is configured, use it
  if (AI_API_KEY && AI_API_URL) {
    try {
      const systemPrompt = `You are an AI assistant for Kishor Kumar's portfolio website. 
Answer questions ONLY about Kishor's skills, projects, and experience using the following information:

Name: ${context.name}
Role: ${context.role}
Description: ${context.description}

Skills: ${JSON.stringify(context.skills, null, 2)}
Projects: ${JSON.stringify(context.projects.map(p => ({
  title: p.title,
  subtitle: p.subtitle,
  description: p.description,
  technologies: p.technologies
})), null, 2)}
Experience: ${JSON.stringify(context.experience, null, 2)}

Be concise, professional, and helpful. If asked about something not in the portfolio data, politely redirect to what you do know about Kishor.`;

      // Example for OpenAI API
      const response = await axios.post(
        AI_API_URL,
        {
          model: AI_MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userMessage }
          ],
          temperature: 0.7,
          max_tokens: 300
        },
        {
          headers: {
            'Authorization': `Bearer ${AI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('AI API Error:', error.message);
      // Fall back to rule-based responses
    }
  }

  // Fallback: Rule-based responses
  return getRuleBasedResponse(userMessage, context);
};

/**
 * Rule-based response system as fallback
 */
function getRuleBasedResponse(message, context) {
  const lowerMessage = message.toLowerCase();

  // Skills questions
  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('technologies')) {
    const allSkills = [];
    Object.values(context.skills).forEach(category => {
      category.forEach(skill => allSkills.push(skill.name));
    });
    return `Kishor is proficient in: ${allSkills.slice(0, 10).join(', ')}. He specializes in full-stack development with React, Node.js, PostgreSQL, and MongoDB.`;
  }

  // DriveHub project
  if (lowerMessage.includes('drivehub') || lowerMessage.includes('drive hub') || lowerMessage.includes('car rental')) {
    const project = context.projects.find(p => p.title === 'DriveHub');
    return `${project.title}: ${project.description} Built with ${project.technologies.join(', ')}. GitHub: ${project.github}`;
  }

  // Product Lifecycle project
  if (lowerMessage.includes('product life') || lowerMessage.includes('lifecycle')) {
    const project = context.projects.find(p => p.title === 'Product Life Cycle Management');
    return `${project.title}: ${project.description} Technologies used: ${project.technologies.slice(0, 8).join(', ')}, and more. GitHub: ${project.github}`;
  }

  // HelpDesk Mini project
  if (lowerMessage.includes('helpdesk') || lowerMessage.includes('help desk') || lowerMessage.includes('ticket')) {
    const project = context.projects.find(p => p.title === 'HelpDesk Mini');
    return `${project.title}: ${project.description} Built with ${project.technologies.join(', ')}. GitHub: ${project.github}. Live Demo: ${project.demo}`;
  }

  // Keylogger project
  if (lowerMessage.includes('keylogger') || lowerMessage.includes('security') || lowerMessage.includes('cybersecurity')) {
    const project = context.projects.find(p => p.title === 'Keylogger Detection');
    return `${project.title}: ${project.description} Technologies: ${project.technologies.join(', ')}. GitHub: ${project.github}`;
  }

  // Projects general
  if (lowerMessage.includes('project')) {
    return `Kishor has worked on ${context.projects.length} major projects including DriveHub (Car Rental System), Product Life Cycle Management, Escape Room (Unity 3D Game), and Keylogger Detection (Cyber Security Tool). Each project demonstrates full-stack development capabilities.`;
  }

  // Experience
  if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
    return `Kishor Kumar is a Computer Science and Engineering graduate from Lovely Professional University (LPU), Punjab, India (August 2022 – July 2026). He has completed training in Data Structures and Algorithms (May 2024 – July 2024) and has built multiple full-stack projects demonstrating practical development skills.`;
  }

  // Education
  if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study') || lowerMessage.includes('university') || lowerMessage.includes('college')) {
    return `Kishor Kumar graduated with a B.Tech in Computer Science and Engineering from Lovely Professional University (LPU), Punjab, India (August 2022 – July 2026). He also completed Data Structures and Algorithms training (May 2024 – July 2024).`;
  }

  // Certifications
  if (lowerMessage.includes('certif') || lowerMessage.includes('credential')) {
    return `Kishor has earned certifications in: SAP Certified Data Analyst (SAP Analytics Cloud, Feb 2026), MERN Stack (Cipher Schools, July 2025), Cloud Computing (NPTEL, Nov 2024), and Ethical Hacking Essentials (EC-Council, June 2024).`;
  }

  // Achievements
  if (lowerMessage.includes('achieve') || lowerMessage.includes('award') || lowerMessage.includes('badge')) {
    return `Kishor's achievements include: 5-Star Badge in Python & C++ on HackerRank (2024) and leading a Community Development Project (June 2023).`;
  }

  // Contact/hire
  if (lowerMessage.includes('contact') || lowerMessage.includes('hire') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
    return `You can reach Kishor at kishorhcs@gmail.com. He's currently open to opportunities! You can also find him on GitHub (https://github.com/Kishor2006) and LinkedIn (https://www.linkedin.com/in/kishor-kumar206).`;
  }

  // About/intro
  if (lowerMessage.includes('who') || lowerMessage.includes('about') || lowerMessage.includes('introduce')) {
    return `${context.name} is a Computer Science and Engineering graduate and ${context.role}. ${context.description} He has a B.Tech from Lovely Professional University, Punjab, India, and has earned certifications in MERN Stack, Cloud Computing, SAP Analytics Cloud, and Ethical Hacking.`;
  }

  // Default response
  return `I can help you learn about Kishor's skills, projects, education, certifications, and experience! Try asking about his tech stack, the DriveHub project, Product Life Cycle Management, HelpDesk Mini, his certifications, or his educational background.`;
}
