import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient({ errorFormat: 'pretty' });

type CreateRoleInput = {
  name: string;
  level: number;
  description: string;
};

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  isEnabled: boolean;
  roleId: string;
  emailVerified: Date;
};

type CreateAccountInput = {
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
};

const createRole = async (input: CreateRoleInput) => {
  const role = await prisma.role.findFirst({ where: { name: input.name } });

  if (role) {
    return role;
  }

  return prisma.role.create({
    data: input,
  });
};

const createAccount = async (input: CreateAccountInput) => {
  const account = await prisma.account.findFirst({ where: { userId: input.userId } });

  if (account) {
    return account;
  }

  return await prisma.account.create({
    data: input,
  });
};

const createUser = async (input: CreateUserInput) => {
  let user = await prisma.user.findFirst({ where: { email: input.email } });

  if (!user) {
    user = await prisma.user.create({
      data: input,
    });
  }

  await createAccount({
    userId: user.id,
    type: 'credentials',
    provider: 'Credentials',
    providerAccountId: user.id,
  });

  return user;
};

const main = async () => {
  const roleAdmin = await createRole({
    name: 'admin',
    description: 'can do everything in the application',
    level: 200,
  });

  await createRole({
    name: 'user',
    description: 'can do everything except add, update or delete users',
    level: 100,
  });

  await createUser({
    name: 'Rahul Pandey',
    email: 'rahul@email.com',
    emailVerified: new Date(),
    isEnabled: true,
    roleId: roleAdmin.id,
    password: bcrypt.hashSync('qwerty'),
  });

  await createUser({
    name: 'Alex Chiou',
    email: 'alex@email.com',
    emailVerified: new Date(),
    isEnabled: true,
    roleId: roleAdmin.id,
    password: bcrypt.hashSync('qwerty'),
  });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
