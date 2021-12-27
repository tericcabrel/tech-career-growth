import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { CommonResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE, RESOURCE_DELETED_MESSAGE } from '@/utils/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CommonResponseData>) {
  if (req.method === 'DELETE') {
    const id = req.query.id as string;

    await prisma.category.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({ message: RESOURCE_DELETED_MESSAGE });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
}
