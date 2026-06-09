'use server'

import nodemailer from 'nodemailer'
import { redirect } from 'next/navigation'

export async function submitContact(
  prevState: { error: string },
  formData: FormData,
): Promise<{ error: string }> {
  const name        = (formData.get('name') as string)?.trim()
  const email       = (formData.get('email') as string)?.trim()
  const countryCode = (formData.get('countryCode') as string)?.trim()
  const phone       = (formData.get('phone') as string)?.trim()

  if (!name || !email) {
    return { error: 'Please fill in your name and email.' }
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRx.test(email)) {
    return { error: 'Please enter a valid email address.' }
  }

  let sent = false

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to:   process.env.GMAIL_USER,
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fafafa;border-radius:12px;">
          <h2 style="color:#FD853A;margin:0 0 24px;">New Project Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#344054;width:120px;">Name</td>
              <td style="padding:10px 0;color:#1D2939;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#344054;">Email</td>
              <td style="padding:10px 0;color:#1D2939;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#344054;">Phone</td>
              <td style="padding:10px 0;color:#1D2939;">${countryCode} ${phone}</td>
            </tr>` : ''}
          </table>
        </div>
      `,
    })

    sent = true
  } catch {
    return { error: 'Could not send your message. Please try again.' }
  }

  if (sent) redirect('/thank-you')

  return { error: 'Something went wrong.' }
}

/* ── Modal version — returns success state instead of redirecting ── */
export async function submitHireModal(
  prevState: { error: string; success: boolean },
  formData: FormData,
): Promise<{ error: string; success: boolean }> {
  const name        = (formData.get('name') as string)?.trim()
  const email       = (formData.get('email') as string)?.trim()
  const countryCode = (formData.get('countryCode') as string)?.trim()
  const phone       = (formData.get('phone') as string)?.trim()

  if (!name || !email) {
    return { error: 'Please fill in your name and email.', success: false }
  }

  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRx.test(email)) {
    return { error: 'Please enter a valid email address.', success: false }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio – Hire Me" <${process.env.GMAIL_USER}>`,
      to:   process.env.GMAIL_USER,
      replyTo: email,
      subject: `Hire Me request from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;padding:32px;background:#fafafa;border-radius:12px;">
          <h2 style="color:#FD853A;margin:0 0 24px;">Hire Me Request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#344054;width:120px;">Name</td>
              <td style="padding:10px 0;color:#1D2939;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#344054;">Email</td>
              <td style="padding:10px 0;color:#1D2939;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#344054;">Phone</td>
              <td style="padding:10px 0;color:#1D2939;">${countryCode} ${phone}</td>
            </tr>` : ''}
          </table>
        </div>
      `,
    })
  } catch {
    return { error: 'Could not send. Please try again.', success: false }
  }

  return { success: true, error: '' }
}
