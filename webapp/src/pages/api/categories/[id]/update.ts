import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { CategoryResponseData, CommonResponseData, UpdateCategoryInput } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE, RESOURCE_NOT_FOUND_MESSAGE } from '@/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<CategoryResponseData | CommonResponseData>) => {
  if (req.method === 'PUT') {
    const id = req.query.id as string;

    const category = await prisma.category.findFirst({
      where: {
        id: id,
      },
    });

    if (!category) {
      return res.status(404).json({ message: RESOURCE_NOT_FOUND_MESSAGE });
    }

    const input = req.body as Omit<UpdateCategoryInput, 'id'>;

    const updatedCategory = await prisma.category.update({
      where: {
        id: category.id,
      },
      data: input,
    });

    return res.status(200).json({ data: updatedCategory });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
};

export default withSentry(handler);
