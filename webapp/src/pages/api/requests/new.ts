import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { withSentry } from '@sentry/nextjs';
import { CreateRequestInput, RequestResponseData, CommonResponseData } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE } from '@/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<RequestResponseData | CommonResponseData>) => {
  if (req.method === 'POST') {
    const input: CreateRequestInput = req.body;
    const createdRequest = await prisma.request.create({
      data: {
        ...input,
      },
    });

    return res.status(200).json({ data: createdRequest });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
};

export default withSentry(handler);
