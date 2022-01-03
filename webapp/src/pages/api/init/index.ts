import type { NextApiRequest, NextApiResponse } from 'next';
import { CommonResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE } from '@/utils/constants';
import { main } from '../../../../prisma/seed';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CommonResponseData>) {
  if (req.method === 'POST') {
    const input: { token: string } = req.body;

    if (input.token === process.env.SEED_TOKEN) {
      await main();

      return res.status(200).json({ message: 'Done' });
    }

    return res.status(404).json({ message: 'cannot proceed the request' });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
}
