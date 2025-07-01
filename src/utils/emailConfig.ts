
// EmailJS Configuration Guide
// 
// To complete the email functionality setup:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{phone}} - Sender's phone (optional)
//    - {{subject}} - Email subject
//    - {{inquiry_type}} - Type of inquiry
//    - {{message}} - Message content
//    - {{reply_to}} - Reply-to email address
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the placeholder values in Contact.tsx with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'service_qka0qkq', // Replace with your EmailJS service ID
  templateId: 'template_vel3g58', // Replace with your EmailJS template ID
  publicKey: 'X-H6CJ6Z3vVTY1E7S', // Replace with your EmailJS public key
  toEmail: 'help.gopalwelfare@gmail.com'
};

// Example EmailJS template content:
/*
Subject: New Contact Form Submission - {{subject}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Inquiry Type: {{inquiry_type}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Gopal Educational and Social Welfare Society website.
Reply directly to this email to respond to the sender.
*/
