import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { UserResponseListData } from '@/types/common';

export default async function handler(req: NextApiRequest, res: NextApiResponse<UserResponseListData>) {
  const result = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      role: {
        select: {
          id: true,
          level: true,
          name: true,
        },
      },
    },
  });

  return res.status(200).json({ data: result });
}
