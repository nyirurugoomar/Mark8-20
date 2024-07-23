// utils/signoutHandler.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function signoutHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        res.setHeader('Set-Cookie', 'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
        res.status(200).json({ message: 'Signout success!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export function signoutClient() {
    document.cookie = 'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
