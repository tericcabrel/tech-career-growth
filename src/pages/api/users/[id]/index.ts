import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { CommonResponseData, UserResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE, RESOURCE_NOT_FOUND_MESSAGE } from '@/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<UserResponseData | CommonResponseData>) => {
  if (req.method === 'GET') {
    const id = req.query.id as string;

    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: RESOURCE_NOT_FOUND_MESSAGE });
    }

    return res.status(200).json({ data: user });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
};

export default withSentry(handler);
