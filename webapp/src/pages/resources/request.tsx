import dynamic from 'next/dynamic';
import prisma from '@/lib/prisma';
import { CategoryTree } from '@/types/common';
import { formatCategoryToCategoryChoice } from '@/utils/forms';

const RequestResource = dynamic(() => import('@/containers/resources/request'));

type Props = {
  categories: CategoryTree[];
};

const RequestResourcePage = ({ categories }: Props) => {
  return <RequestResource categories={categories} />;
};

export async function getServerSideProps() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      value: true,
      parentId: true,
      description: true,
    },
  });

  const transformedCategories = formatCategoryToCategoryChoice(categories);

  return { props: { categories: transformedCategories } };
}

export default RequestResourcePage;
