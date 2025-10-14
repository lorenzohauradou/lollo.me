import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, projectType, budget, message } = body

    const { data, error } = await resend.emails.send({
      from: 'Contatto da lollo.me <onboarding@resend.dev>',
      to: ['lorenzooradu@gmail.com'],
      subject: `Contatto da lollo.me: ${name}`,
      html: `
        <h2>Nuovo messaggio dal portfolio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tipo di progetto:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: 'Errore nell\'invio del messaggio' }, { status: 500 })
  }
}

