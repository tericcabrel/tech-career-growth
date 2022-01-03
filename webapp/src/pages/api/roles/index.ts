import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { RoleResponseListData } from '@/types/common';

export default async function handler(req: NextApiRequest, res: NextApiResponse<RoleResponseListData>) {
  const result = await prisma.role.findMany({ orderBy: { level: 'asc' } });

  return res.status(200).json({ data: result });
}
