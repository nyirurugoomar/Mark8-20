// /app/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  try {
    const response = await fetch('https://api.mark8.awesomity.rw/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const text = await response.text();
    console.log('Response status:', response.status);
    console.log('Response text:', text);

    if (!response.ok) {
      return res.status(response.status).json({ message: text });
    }

    try {
      const data = JSON.parse(text);
      res.status(200).json(data);
    } catch (error) {
      console.error('JSON parsing error:', error);
      return res.status(500).json({ message: 'Failed to parse JSON response' });
    }
  } catch (error: any) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}
