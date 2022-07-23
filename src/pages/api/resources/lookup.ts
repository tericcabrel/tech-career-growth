import type { NextApiRequest, NextApiResponse } from 'next';
import { withSentry } from '@sentry/nextjs';
import { ResourcesResponseData } from '@/types/common';
import { Resource } from '@/types/model';
import prisma from '@/lib/prisma';
// import CacheClient from '@/lib/caching';

const findResourcesFromDb = async (categoryId: string): Promise<Resource[]> => {
  return prisma.resource.findMany({
    where: {
      categoryId,
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
};

const findResources = async (categoryId: string) => {
  /*const cacheClient = new CacheClient();
    const cachedData = await cacheClient.findData<string>(categoryId);

    if (!cachedData) {
      const result = await findResourcesFromDb(categoryId);

      await cacheClient.cacheData(categoryId, result);

      return result;
    }

    return JSON.parse(<string>cachedData) as Resource[];*/

  return findResourcesFromDb(categoryId);
};

const handler = async (req: NextApiRequest, res: NextApiResponse<ResourcesResponseData>) => {
  const search = req.query.search as string;

  if (!search) {
    return res.status(200).json({ data: [] });
  }

  const result = await findResources(search);

  return res.status(200).json({ data: result });
};

export default withSentry(handler);
