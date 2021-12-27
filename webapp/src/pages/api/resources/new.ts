import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { CreateResourceInput, ResourceResponseData, CommonResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE } from '@/utils/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResourceResponseData | CommonResponseData>,
) {
  if (req.method === 'POST') {
    const input: CreateResourceInput = req.body;
    const createdResource = await prisma.resource.create({
      data: {
        ...input,
        clickCount: 0,
      },
    });

    return res.status(200).json({ data: createdResource });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
}
