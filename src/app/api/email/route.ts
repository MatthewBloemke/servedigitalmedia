import { resend } from '@/lib/resend';
import EmailTemplate from '@/components/EmailComponent';

interface RequestBody {
  number: string
  email: string
  name: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  try {
    const {data, error} = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['dev.servedigitalmedia@gmail.com'],
      subject: `New message from ${body.name}`,
      react: EmailTemplate({subject: body.subject, message: body.message, userEmail: body.email, userName: body.name, phoneNumber: body.number})
    });
    
    if (error) {
      console.log(error)
      throw new Error();
    }

    return new Response(JSON.stringify(true))
  } catch (err) {
    console.log(err)
    const response = new Response(null, {status: 400, statusText: 'Failed to send email'});
    return response;
  }
}