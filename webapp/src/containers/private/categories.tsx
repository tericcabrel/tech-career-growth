import { Category } from '@/types/model';
import { withPrivateLayout } from '@/components/hof/with-private-layout';
import CategoryTree from '@/components/category/category-tree';
import { CategoryProvider, useCategoryTree } from '@/components/category/category-context';

const data: Category[] = [
  {
    parentId: null,
    id: '1',
    name: 'Cat One',
    value: 'cat-one',
    description: 'Desc cat one',
  },
  {
    parentId: null,
    id: '2',
    name: 'Cat Two',
    value: 'cat-two',
    description: 'Desc cat two',
  },
  {
    parentId: null,
    id: '3',
    name: 'Cat Three',
    value: 'cat-three',
    description: 'Desc cat three',
  },
  {
    parentId: '1',
    id: '11',
    name: 'Cat One One',
    value: 'cat-one-one',
    description: 'Desc cat one one',
  },
  {
    parentId: '3',
    id: '31',
    name: 'Cat Three One',
    value: 'cat-three-one',
    description: 'Desc cat three one',
  },
];

const CategoryView = () => {
  const { rootCategories } = useCategoryTree();

  return (
    <div className="py-5 w-3/5 mx-auto">
      <div className="mt-12 flex flex-col w-full items-center justify-center bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:px-6 border-b w-full">
          <h1 className="text-3xl font-medium text-gray-900">Categories Tree</h1>
        </div>
        <div className="p-4 w-full border-t border-gray-100">
          <CategoryTree items={rootCategories} isRootLevel={true} />
        </div>
      </div>
    </div>
  );
};

const CategoriesList = () => {
  return (
    <CategoryProvider value={data}>
      <CategoryView />
    </CategoryProvider>
  );
};

export default withPrivateLayout(CategoriesList, { title: 'Categories List' });
