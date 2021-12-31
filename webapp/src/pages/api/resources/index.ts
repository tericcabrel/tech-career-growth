import type { NextApiRequest, NextApiResponse } from 'next';
import prisma, { Prisma } from '@/lib/prisma';
import { ResourceListResponseData, ResourceSearchParams } from '@/types/common';
import { PAGE_LIMIT } from '@/utils/constants';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResourceListResponseData>) {
  const { search, page, category } = req.query as unknown as ResourceSearchParams;
  const filter: Prisma.ResourceWhereInput = {
    name: { contains: search },
    categoryId: { equals: category },
  };

  const totalItems = await prisma.resource.count({ where: filter });

  const skip = (page - 1) * PAGE_LIMIT;
  const totalPages = Math.ceil(totalItems / PAGE_LIMIT);

  const items = await prisma.resource.findMany({
    where: filter,
    take: PAGE_LIMIT,
    skip,
    orderBy: { createdAt: 'desc' },
    include: { category: { select: { id: true, name: true } } },
  });

  return res.status(200).json({ data: { limit: PAGE_LIMIT, currentPage: page, items, totalItems, totalPages } });
}
