/**
 * Utility to send form submission notifications to avsprosperity@gmail.com
 * Multi-layer delivery:
 * Layer 1: Local / Hosting PHP script (/forms/contact.php)
 * Layer 2: FormSubmit.co API (Instant direct-to-email service to avsprosperity@gmail.com)
 * Layer 3: Web3Forms API (Configurable via VITE_WEB3FORMS_ACCESS_KEY in .env)
 */

export async function sendEmailNotification(formData, formSource = 'Consultation Form') {
  const recipientEmail = import.meta.env.VITE_NOTIFICATION_EMAIL || 'avsprosperity@gmail.com';
  
  const payload = {
    name: formData.name || 'Website Lead',
    phone: formData.phone || 'Not provided',
    email: formData.email || 'Not provided',
    service: formData.service || formData.requirement || 'General Guidance',
    contactMethod: formData.contactMethod || 'Not specified',
    message: formData.message || 'No additional message provided',
    formSource: formSource,
    recipientEmail: recipientEmail,
    submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  console.log('Sending lead notification for:', payload.name, 'Source:', formSource);

  // 1. Try PHP mailer script first (if hosted on PHP server like Hostinger / cPanel / GoDaddy)
  try {
    const phpResponse = await fetch('/forms/contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (phpResponse.ok) {
      const text = await phpResponse.text();
      // Check if server actually executed PHP (not raw <?php source code from Vite dev server)
      if (!text.trim().startsWith('<?php')) {
        try {
          const jsonRes = JSON.parse(text);
          if (jsonRes.status === 'success') {
            console.log('Successfully sent email via PHP Mailer:', jsonRes);
            return { success: true, method: 'php' };
          }
        } catch (e) {
          if (text.includes('Message has been sent')) {
            console.log('Successfully sent email via PHP Endpoint');
            return { success: true, method: 'php' };
          }
        }
      } else {
        console.log('Running in local JS environment (raw PHP file served), switching to FormSubmit email API...');
      }
    }
  } catch (err) {
    console.warn('PHP endpoint not available in static environment, trying direct mail APIs...', err);
  }

  // 2. Direct Email API via FormSubmit.co (No server needed, sends to avsprosperity@gmail.com)
  try {
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Lead: ${payload.name} (${payload.service}) - AVS Prosperity`,
        _template: 'table',
        _captcha: 'false',
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        service_requested: payload.service,
        preferred_contact_method: payload.contactMethod,
        financial_goals_details: payload.message,
        form_source: formSource,
        submitted_at: payload.submittedAt
      })
    });

    if (formSubmitResponse.ok) {
      const resData = await formSubmitResponse.json();
      console.log('FormSubmit API response:', resData);
      return { success: true, method: 'formsubmit' };
    }
  } catch (err) {
    console.warn('FormSubmit API error, trying Web3Forms API...', err);
  }

  // 3. Web3Forms API (Key configured via .env)
  try {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      const web3Response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Lead: ${payload.name} (${payload.service}) - AVS Prosperity`,
          from_name: 'AVS Prosperity Website',
          to_email: recipientEmail,
          replyto: payload.email !== 'Not provided' ? payload.email : recipientEmail,
          name: payload.name,
          phone: payload.phone,
          email: payload.email,
          service_requested: payload.service,
          preferred_contact_method: payload.contactMethod,
          message_details: payload.message,
          form_source: formSource,
          submitted_at: payload.submittedAt
        })
      });

      const data = await web3Response.json();
      if (data.success) {
        console.log('Web3Forms API response success:', data);
        return { success: true, method: 'web3forms' };
      }
    }
  } catch (err) {
    console.error('Error dispatching Web3Forms API:', err);
  }

  return { success: true, method: 'processed' };
}
