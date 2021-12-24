import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}
const isProduction = process.env.NODE_ENV === 'production';
export const prisma = global.prisma || new PrismaClient({ log: isProduction ? ['query'] : [] });

if (!isProduction) global.prisma = prisma;
