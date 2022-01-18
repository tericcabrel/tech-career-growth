import type { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { CreateCategoryInput, CategoryResponseData, CommonResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE } from '@/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<CategoryResponseData | CommonResponseData>) => {
  if (req.method === 'POST') {
    const input: CreateCategoryInput = req.body;
    const createdCategory = await prisma.category.create({
      data: {
        ...input,
        value: nanoid(),
      },
    });

    return res.status(200).json({ data: createdCategory });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
};

export default withSentry(handler);
