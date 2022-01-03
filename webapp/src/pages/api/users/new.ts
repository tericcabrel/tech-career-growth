import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { CreateUserInput, UserResponseData, CommonResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE } from '@/utils/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserResponseData | CommonResponseData>,
) {
  if (req.method === 'POST') {
    const input: CreateUserInput = req.body;

    const createdUser = await prisma.user.create({
      data: {
        ...input,
      },
    });

    await prisma.account.create({
      data: {
        userId: createdUser.id,
        type: 'credentials',
        provider: 'Credentials',
        providerAccountId: createdUser.id,
      },
    });

    return res.status(200).json({ data: createdUser });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
}
