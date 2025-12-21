import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    const { data, error } = await resend.emails.send({
      from: 'Contact from lollo.me <onboarding@resend.dev>',
      to: ['lorenzooradu@gmail.com'],
      subject: `New message from ${name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch {
    return NextResponse.json({ error: 'Error sending message' }, { status: 500 })
  }
}
