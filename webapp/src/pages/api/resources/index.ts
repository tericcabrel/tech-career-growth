import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { ResourceListResponseData } from '@/types/common';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResourceListResponseData>) {
  const result = await prisma.resource.findMany({
    orderBy: { createdAt: 'desc' },
    include: { category: { select: { id: true, name: true } } },
  });

  res.status(200).json({ data: { limit: 20, currentPage: 1, items: result, totalItems: 1, totalPages: 1 } });
}
