import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { CreateRequestInput, RequestResponseData, CommonResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE } from '@/utils/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RequestResponseData | CommonResponseData>,
) {
  if (req.method === 'POST') {
    const input: CreateRequestInput = req.body;
    const createdRequest = await prisma.request.create({
      data: {
        ...input,
      },
    });

    return res.status(200).json({ data: createdRequest });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
}
