import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { DashboardSummaryData } from '@/types/common';

export default async function handler(req: NextApiRequest, res: NextApiResponse<DashboardSummaryData>) {
  const category = await prisma.category.count();
  const resource = await prisma.resource.count();
  const pendingRequest = await prisma.request.count({ where: { status: 'PENDING' } });
  const totalRequest = await prisma.request.count();

  return res.status(200).json({
    data: {
      category,
      resource,
      pendingRequest,
      totalRequest,
    },
  });
}
