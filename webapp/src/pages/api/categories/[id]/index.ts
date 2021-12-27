import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { CommonResponseData } from '@/types/common';
import { CATEGORY_DELETED_MESSAGE, METHOD_NOT_ALLOWED_MESSAGE } from '@/utils/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CommonResponseData>) {
  if (req.method === 'DELETE') {
    const id = req.query.id as string;

    const subCategories = await prisma.category.findMany({
      where: {
        parentId: id,
      },
      select: {
        id: true,
      },
    });

    const input = subCategories.map((category) => category.id).concat([id]);

    await prisma.category.deleteMany({
      where: {
        id: { in: input },
      },
    });

    return res.status(200).json({ message: CATEGORY_DELETED_MESSAGE });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
}
