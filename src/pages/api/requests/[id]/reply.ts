import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import prisma from '@/lib/prisma';
import { CommonResponseData, RequestReplyInput } from '@/types/common';
import { METHOD_NOT_ALLOWED_MESSAGE, REQUEST_UPDATED_MESSAGE } from '@/utils/constants';

const handler = async (req: NextApiRequest, res: NextApiResponse<CommonResponseData>) => {
  if (req.method === 'PUT') {
    const id = req.query.id as string;
    const input = req.body as RequestReplyInput;

    const updatedRequest = await prisma.request.update({
      where: {
        id,
      },
      data: {
        status: input.status,
      },
    });

    if (input.message) {
      await prisma.reply.create({
        data: {
          requestId: updatedRequest.id,
          message: input.message,
        },
      });

      // TODO sent email to the user
    }

    return res.status(200).json({ message: REQUEST_UPDATED_MESSAGE });
  }

  return res.status(405).json({ message: METHOD_NOT_ALLOWED_MESSAGE });
};

export default withSentry(handler);
