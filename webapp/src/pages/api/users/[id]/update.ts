import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { UserResponseData, CommonResponseData, UpdateUserInput } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE, RESOURCE_NOT_FOUND_MESSAGE } from '@/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<UserResponseData | CommonResponseData>) => {
  if (req.method === 'PUT') {
    const id = req.query.id as string;

    const user = await prisma.user.findFirst({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: RESOURCE_NOT_FOUND_MESSAGE });
    }

    const input = req.body as Omit<UpdateUserInput, 'id'>;

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: input,
    });

    return res.status(200).json({ data: updatedUser });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
};

export default withSentry(handler);
