import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { CategoryResponseListData } from '@/types/common';

const handler = async (req: NextApiRequest, res: NextApiResponse<CategoryResponseListData>) => {
  const result = await prisma.category.findMany({ orderBy: { createdAt: 'asc' } });

  return res.status(200).json({ data: result });
};

export default withSentry(handler);
