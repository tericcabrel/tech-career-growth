import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { ResourceResponseData, CommonResponseData, UpdateResourceInput } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE, RESOURCE_NOT_FOUND_MESSAGE } from '@/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<ResourceResponseData | CommonResponseData>) => {
  if (req.method === 'PUT') {
    const id = req.query.id as string;

    const resource = await prisma.resource.findFirst({ where: { id } });

    if (!resource) {
      return res.status(404).json({ message: RESOURCE_NOT_FOUND_MESSAGE });
    }

    const input = req.body as Omit<UpdateResourceInput, 'id'>;

    const updatedResource = await prisma.resource.update({
      where: {
        id: resource.id,
      },
      data: input,
    });

    return res.status(200).json({ data: updatedResource });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
};

export default withSentry(handler);
