import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';

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

type CategoryInput = {
  name: string;
  description: string;
  children: CategoryInput[];
};

const categories: CategoryInput[] = [
  {
    name: 'Improving my resume',
    description: '',
    children: [],
  },
  {
    name: 'Interviewing',
    description: '',
    children: [
      {
        name: 'Data structures and algorithms',
        description: '',
        children: [],
      },
      {
        name: 'Behavioral',
        description: '',
        children: [],
      },
      {
        name: 'System design',
        description: '',
        children: [],
      },
      {
        name: 'Nerves and anxiety',
        description: '',
        children: [],
      },
      {
        name: 'Studying in general',
        description: '',
        children: [],
      },
    ],
  },
  {
    name: 'Productivity',
    description: '',
    children: [],
  },
  {
    name: 'Moving up the career ladder',
    description: '',
    children: [],
  },
  {
    name: 'Building projects',
    description: '',
    children: [],
  },
  {
    name: 'General Growth and Learning',
    description: '',
    children: [],
  },
];

const createRole = async (input: CreateRoleInput) => {
  return prisma.role.upsert({
    create: input,
    where: {
      name: input.name,
    },
    update: input,
  });
};

const createAccount = async (input: CreateAccountInput) => {
  const account = await prisma.account.findFirst({ where: { userId: input.userId, type: 'credentials' } });

  if (account) {
    return account;
  }

  return await prisma.account.create({
    data: input,
  });
};

const createUser = async (input: CreateUserInput) => {
  const user = await prisma.user.upsert({
    create: input,
    where: { email: input.email },
    update: input,
  });

  await createAccount({
    userId: user.id,
    type: 'credentials',
    provider: 'Credentials',
    providerAccountId: user.id,
  });

  return user;
};

const createCategory = async (input: CategoryInput, parentId: string | null) => {
  const parentCategory = await prisma.category.upsert({
    create: {
      name: input.name,
      value: nanoid(),
      description: input.description,
      parentId,
    },
    where: {
      value: input.name,
    },
    update: {
      name: input.name,
    },
  });

  const promises = input.children.map((child) => createCategory(child, parentCategory.id));

  await Promise.all(promises);
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

  const promiseCategories = categories.map((category) => createCategory(category, null));

  await Promise.all(promiseCategories);
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
