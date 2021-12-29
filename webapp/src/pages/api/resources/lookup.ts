import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { ResourcesResponseData } from '@/types/common';

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResourcesResponseData>) {
  const search = req.query.search as string;

  if (!search) {
    return res.status(200).json({ data: [] });
  }

  const result = await prisma.resource.findMany({
    where: {
      category: {
        id: search,
      },
    },
    include: {
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return res.status(200).json({ data: result });
}
