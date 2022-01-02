import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { CategoryResponseListData } from '@/types/common';

export default async function handler(req: NextApiRequest, res: NextApiResponse<CategoryResponseListData>) {
  const result = await prisma.category.findMany({ orderBy: { createdAt: 'asc' } });

  return res.status(200).json({ data: result });
}
