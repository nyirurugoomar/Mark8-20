// pages/api/signout.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import signoutHandler from '@/utils/signoutHandler';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    return signoutHandler(req, res);
}
