import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

type CreateRoleInput = {
  name: string;
  level: number;
  description: string;
};

type CreateUserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isEnabled: boolean;
  roleId: bigint;
};

const createRole = async (input: CreateRoleInput) => {
  const roleExist = await prisma.role.findFirst({ where: { name: input.name } });
  if (roleExist) {
    return roleExist;
  }

  return await prisma.role.create({
    data: input,
  });
};

const createUser = async (input: CreateUserInput) => {
  const userExist = await prisma.user.findFirst({ where: { email: input.email } });
  if (userExist) {
    return userExist;
  }

  return await prisma.user.create({
    data: input,
  });
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
    firstName: 'Rahul',
    lastName: 'Pandey',
    email: 'rahul@email.com',
    isEnabled: true,
    roleId: roleAdmin.id,
    password: bcrypt.hashSync('qwerty'),
  });

  await createUser({
    firstName: 'Alex',
    lastName: 'Chiou',
    email: 'alex@email.com',
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
