import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  // Here you would typically send an email or save to a database
  console.log('Received contact form submission:', { name, email, message })

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({ success: true })
}

