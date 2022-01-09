import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { UserResponseListData } from '@/types/common';

const handler = async (req: NextApiRequest, res: NextApiResponse<UserResponseListData>) => {
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
};

export default withSentry(handler);
