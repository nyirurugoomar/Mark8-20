import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password, firstName,lastName,phoneNumber  } = req.body;

  try {
    const response = await fetch('https://api.mark8.awesomity.rw/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, firstName,lastName,phoneNumber  }),
    });

    const text = await response.text(); // Get response text
    console.log('Response status:', response.status);
    console.log('Response text:', text);

    if (!response.ok) {
      return res.status(response.status).json({ message: text });
    }

    const data = JSON.parse(text); // Parse JSON from text
    res.status(200).json(data);
  } catch (error: any) { // Explicitly type error as any
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}