import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

interface Data {
  result: boolean;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { htmlMessage, subject } = req.body;
    const resend = new Resend(process.env.RESEND_API_KEY);
    resend.emails
      .send({
        from: `${process.env.DEMO_EMAIL_FROM}`,
        to: `${process.env.DEMO_EMAIL_TO}`,
        subject: subject,
        html: htmlMessage
      })
      .then((response) => {
        if (response) {
          return res.status(200).json({ result: true });
        } else {
          return res.status(400).json({ result: false });
        }
      });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ result: false });
  }
}
