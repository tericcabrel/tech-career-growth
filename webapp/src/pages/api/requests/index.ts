import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { RequestListParams, RequestListResponseData } from '@/types/common';
import { PAGE_LIMIT } from '@/utils/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse<RequestListResponseData>) {
  const { page, status } = req.query as unknown as RequestListParams;

  const totalItems = await prisma.request.count();

  const skip = (page - 1) * PAGE_LIMIT;
  const totalPages = Math.ceil(totalItems / PAGE_LIMIT);

  const items = await prisma.request.findMany({
    orderBy: { createdAt: 'desc' },
    where: {
      status: {
        in: status ? [status] : ['DONE', 'PENDING', 'ARCHIVED'],
      },
    },
    take: PAGE_LIMIT,
    skip,
    include: {
      category: { select: { id: true, name: true } },
      replies: { take: 1, orderBy: { createdAt: 'desc' } },
    },
  });

  return res.status(200).json({
    data: {
      limit: PAGE_LIMIT,
      currentPage: page,
      items,
      totalItems,
      totalPages,
    },
  });
}
