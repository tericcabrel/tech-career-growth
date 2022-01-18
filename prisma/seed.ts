import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { nanoid } from 'nanoid';
import { ResourceType } from '@/types/model';

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

type CreateResourceInput = {
  name: string;
  link: string;
  categoryId: string;
  type: ResourceType;
  description: string | null;
  picture: string | null;
  extra?: any;
};

type CategoryInput = {
  name: string;
  description: string;
  children: CategoryInput[];
  resources: CreateResourceInput[];
};

const categories: CategoryInput[] = [
  {
    name: 'Improving my resume',
    description: '',
    children: [],
    resources: [
      {
        name: 'How To Write An Effective Software Engineering Resume (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/how-to-write-an-effective-software-engineering-resume-e42713a7a2ca?sk=a5da48df741ae973bf1389f42d6948db',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To Write A Stellar Tech Resume That Gets Your More Job Opportunities (Session Slides)',
        type: 'WEBPAGE',
        link: 'https://docs.google.com/presentation/d/15eLqE_WmePLA--lYTG0ZJVcHhpEld2qNTck_w0t_E9k/',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'Why You Should Be BORING With Your Tech Resume (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=MByD2CTwfmM&list=PL7NYbSE8uaBCq2fkG2zlFKvWJcvUL2MkJ&index=1',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'THIS Is Why Your Resume Is Bad [Telling vs. Showing] (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=sDbK84GEE94&list=PL7NYbSE8uaBCq2fkG2zlFKvWJcvUL2MkJ&index=2',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To SUPERCHARGE Your Software Engineer Resume (YouTube Video)',
        type: 'WEBPAGE',
        link: 'https://www.youtube.com/watch?v=9Wb-gHEO9ug&list=PL7NYbSE8uaBCq2fkG2zlFKvWJcvUL2MkJ&index=3',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'My Resume As A UCLA Student Which Got Me My First Software Engineering Job (LinkedIn Post)',
        type: 'WEBPAGE',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:6837074290295349248/',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'My Resume After Facebook (LinkedIn Post)',
        type: 'WEBPAGE',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:6818382738102591488/',
        description: null,
        categoryId: '',
        picture: null,
      },
    ],
  },
  {
    name: 'Interviewing',
    description: '',
    children: [
      {
        name: 'Data structures and algorithms',
        description: '',
        children: [],
        resources: [
          {
            name: 'How To Ace Your Software Engineering Interview [Part 1] - Algorithms and Data Structures (Medium Article)',
            type: 'WEBPAGE',
            link: 'https://chioualexander.medium.com/how-to-ace-your-software-engineering-interview-part-1-algorithms-and-data-structures-1b2accf115c',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'This is How You Properly Learn Data Structures and Algorithms (YouTube Video)',
            type: 'VIDEO',
            link: 'https://www.youtube.com/watch?v=j9FD_Y5JTbw&list=PL7NYbSE8uaBDEXmgcdfyqY7sJ9wkf4W7q',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'How To Truly Master A Data Structures & Algorithms Problem - 2 Sum Example (YouTube Video)',
            type: 'VIDEO',
            link: 'https://www.youtube.com/watch?v=tfqPGGdS8Tk&list=PL7NYbSE8uaBDEXmgcdfyqY7sJ9wkf4W7q&index=4',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'How To Ace Your Big Tech Interview — Data Structures & Algorithms (Session Slides)',
            type: 'WEBPAGE',
            link: 'https://docs.google.com/presentation/d/13uLUHDvZifjp2aVClGsW29nfuVpQYvrkGLP8cej0R_k/edit?usp=sharing',
            description: null,
            categoryId: '',
            picture: null,
          },
        ],
      },
      {
        name: 'Behavioral',
        description: '',
        children: [],
        resources: [
          {
            name: 'How To Ace Your Software Engineering Interview [Part 2] - Behavioral Questions (Medium Article)',
            type: 'WEBPAGE',
            link: 'https://chioualexander.medium.com/how-to-ace-your-software-engineering-interview-part-2-behavioral-questions-a56e916cf834?sk=7171376e9d92d14e8d5eb0128488e33f',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'Acing Tech Interviews Is More Than Just The Solution — How To Properly Communicate In Interviews (YouTube Video)',
            type: 'VIDEO',
            link: 'https://broken-medium-link.com',
            description: null,
            categoryId: '',
            picture: null,
          },
        ],
      },
      {
        name: 'System design',
        description: '',
        children: [],
        resources: [
          {
            name: 'How To Ace Your Software Engineering Interview [Part 3] - System Design Questions (Medium Article)',
            type: 'WEBPAGE',
            link: 'https://chioualexander.medium.com/how-to-ace-your-software-engineering-interview-part-3-system-design-questions-d581bedcaf6a',
            description: null,
            categoryId: '',
            picture: null,
          },
        ],
      },
      {
        name: 'Nerves and anxiety',
        description: '',
        children: [],
        resources: [
          {
            name: 'How To Ace Your Software Engineering Interview [Part 4]- The Mental Game (Medium Article)',
            type: 'WEBPAGE',
            link: 'https://chioualexander.medium.com/how-to-ace-your-software-engineering-interview-part-4-the-mental-game-3a53c9d9cbfa?sk=09708ef488fb966cba881083fe8fccce',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'How To Mentally Prepare For Your Tech Interview (YouTube Video)',
            type: 'VIDEO',
            link: 'https://www.youtube.com/watch?v=LSLyly2GJo4',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'How To Have The Proper Mindset In Big Tech Software Engineering Interviews (YouTube Video)',
            type: 'VIDEO',
            link: 'https://www.youtube.com/watch?v=guxFTl_qIRg',
            description: null,
            categoryId: '',
            picture: null,
          },
        ],
      },
      {
        name: 'Studying in general',
        description: '',
        children: [],
        resources: [
          {
            name: 'Step-By-Step Guide To Prepare For Any Software Engineering Interview (Medium Article)',
            type: 'WEBPAGE',
            link: 'https://chioualexander.medium.com/step-by-step-guide-to-prepare-for-any-software-engineering-interview-7a629b8a1d54?sk=ce0aef80205923bb982d0b27b50c84e8',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'How To Study For A Software Engineering Interview (Medium Article)',
            type: 'WEBPAGE',
            link: 'https://chioualexander.medium.com/how-to-prepare-for-a-software-engineering-interview-4c77f173bae0?sk=bdc3b8a4401641464fdd89c14f0fad8c',
            description: null,
            categoryId: '',
            picture: null,
          },
          {
            name: 'Stop Wasting Your Time In Your Tech Interviews By “Inventing The API” (YouTube Video)',
            type: 'VIDEO',
            link: 'https://chioualexander.medium.com/how-to-prepare-for-a-software-engineering-interview-4c77f173bae0?sk=bdc3b8a4401641464fdd89c14f0fad8c',
            description: null,
            categoryId: '',
            picture: null,
          },
        ],
      },
    ],
    resources: [],
  },
  {
    name: 'Productivity',
    description: '',
    children: [],
    resources: [
      {
        name: 'Achieve More with Conscious Time Management (LinkedIn Article)',
        type: 'WEBPAGE',
        link: 'https://www.linkedin.com/pulse/achieve-more-conscious-time-management-rahul-pandey/',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: '5 Common Traps Junior Developers Fall Into And How To Avoid Them (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/5-common-traps-junior-developers-fall-into-and-how-to-avoid-them-99f36861bfba?sk=2f7e20ffb7e82f6446f223ab62e87e9a',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To Stop Procrastinating (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=64EnzHsQTMo',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How to Balance Your Time Between Your Job And Self Learning (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=qHYh_fiWH2Y',
        description: null,
        categoryId: '',
        picture: null,
      },
    ],
  },
  {
    name: 'Moving up the career ladder',
    description: '',
    children: [],
    resources: [
      {
        name: '5 Things I Wish I Knew About Promotion as an Engineer (LinkedIn Article)',
        type: 'WEBPAGE',
        link: 'https://www.linkedin.com/pulse/5-things-i-wish-knew-promotion-engineer-rahul-pandey/',
        description: null,
        categoryId: '',
        picture: null,
      },
    ],
  },
  {
    name: 'Building projects',
    description: '',
    children: [],
    resources: [
      {
        name: 'Alex’s Simple, Feasible Software Project Ideas - All With Product Specs (GitHub Repo)',
        type: 'WEBPAGE',
        link: 'https://github.com/Gear61/Software-Project-Ideas',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'Step-By-Step Guide To Build An Impressive Software Project (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/step-by-step-guide-to-build-an-impressive-software-project-4ed8845d34aa?sk=b6413293501e495178f1c958b5fe71d6',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How I Built Apps With Over 2 Million Downloads [Part 1] - Choosing An Idea (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/how-i-built-apps-with-over-1-million-downloads-part-1-choosing-ideas-725319d7332b?sk=b63d74520e1d34d3ae5dc99b1deeb067',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How I Built Apps With Over 2 Million Downloads [Part 2] - Building The Product (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://blog.prototypr.io/how-i-built-apps-with-over-1-million-downloads-part-2-building-the-product-7c6f6585022f?sk=d05364eacb3a0e655ca6d3600ebdae57',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How I Built Apps With Over 2 Million Downloads [Part 3] - Growing The Product (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/how-i-built-apps-with-over-1-million-downloads-part-3-growing-the-product-d8a4fdbfdcd3?sk=5a0b498d47c727f67a9bb68f1e1bfadb',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How I Built Apps With Over 2 Million Downloads [Part 4] - Android Tips and Tricks (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/how-i-built-apps-with-over-1-million-downloads-part-4-android-tips-and-tricks-7a2ec229d7ac?sk=3503d1760bb2e22b7f8c857e9f383882',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To Identify Great Product Ideas That Help People (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=-SelDun0MZI&list=PL7NYbSE8uaBBGwuVwA_JHp4E-qhMqDALd&index=2',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To Build Apps With 100k+ Users: Feasibility vs. Excitement (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=6vDwkELh4CQ&list=PL7NYbSE8uaBBGwuVwA_JHp4E-qhMqDALd&index=3',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To Identify 100k+ Users App Ideas You Can Actually Build - Good Idea vs. Bad Idea (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=k_jPKGKMojI&list=PL7NYbSE8uaBBGwuVwA_JHp4E-qhMqDALd&index=4',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'You Need To Walk Before You Can Run (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/you-need-to-walk-before-you-can-run-2b6ac23f0535?sk=277148f1299e76a7fdca4df6ddef698f',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To Build An Amazing Product - Do Just 1 Thing (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=voUyG75SMLw',
        description: null,
        categoryId: '',
        picture: null,
      },
    ],
  },
  {
    name: 'General Growth and Learning',
    description: '',
    children: [],
    resources: [
      {
        name: 'The Ultimate Guide To Advance Your Career In Tech',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/the-ultimate-guide-to-advance-your-career-in-tech-regularly-updated-7b2929355f31',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'How To Learn Optimally As A Junior Engineer — Breadth vs. Depth (YouTube Video)',
        type: 'VIDEO',
        link: 'https://www.youtube.com/watch?v=Pn-LWb_FoOQ',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'The #1 Mistake Companies Make With Their Software Engineers (Medium Article)',
        type: 'WEBPAGE',
        link: 'https://chioualexander.medium.com/the-1-mistake-companies-make-with-their-software-engineers-2c1fdbf6fbbe?sk=a736bba666f4780fc4332139ac2eb585',
        description: null,
        categoryId: '',
        picture: null,
      },
      {
        name: 'The BEST Way To Learn As A Software Engineer (YouTube Video)',
        type: 'WEBPAGE',
        link: 'https://www.youtube.com/watch?v=Ciu8zwOr8PU',
        description: null,
        categoryId: '',
        picture: null,
      },
    ],
  },
];

const createRole = async (input: CreateRoleInput) => {
  const role = await prisma.role.findFirst({ where: { name: input.name } });

  if (!role) {
    return prisma.role.create({ data: input });
  }

  return role;
};

const createAccount = async (input: CreateAccountInput) => {
  const account = await prisma.account.findFirst({ where: { userId: input.userId, type: 'credentials' } });

  if (!account) {
    return prisma.account.create({ data: input });
  }

  return account;
};

const createUser = async (input: CreateUserInput) => {
  const user = await prisma.user.findFirst({ where: { email: input.email } });

  if (!user) {
    const userCreated = await prisma.user.create({ data: input });

    await createAccount({
      userId: userCreated.id,
      type: 'credentials',
      provider: 'Credentials',
      providerAccountId: userCreated.id,
    });

    return userCreated;
  }

  return user;
};

const createCategoryResources = async (categoryId: string, resourcesInput: CreateResourceInput[]) => {
  const promises = resourcesInput.map(async (input) => {
    const resource = await prisma.resource.findFirst({ where: { name: input.name } });

    if (!resource) {
      await prisma.resource.create({
        data: {
          ...input,
          categoryId,
        },
      });
    }
  });

  return Promise.all(promises);
};

const createCategoryAndRelatedResources = async (input: CategoryInput, parentId: string | null) => {
  const parentCategory = await prisma.category.findFirst({ where: { name: input.name } });

  if (!parentCategory) {
    const parentCategoryCreated = await prisma.category.create({
      data: {
        name: input.name,
        value: nanoid(),
        description: input.description,
        parentId,
      },
    });

    await createCategoryResources(parentCategoryCreated.id, input.resources);

    const promises = input.children.map((child) => createCategoryAndRelatedResources(child, parentCategoryCreated.id));

    await Promise.all(promises);
  }
};

export const main = async () => {
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

  const promiseCategories = categories.map((category) => createCategoryAndRelatedResources(category, null));

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
