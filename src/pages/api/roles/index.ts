import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { RoleResponseListData } from '@/types/common';

const handler = async (req: NextApiRequest, res: NextApiResponse<RoleResponseListData>) => {
  const result = await prisma.role.findMany({ orderBy: { level: 'asc' } });

  return res.status(200).json({ data: result });
};

export default withSentry(handler);
