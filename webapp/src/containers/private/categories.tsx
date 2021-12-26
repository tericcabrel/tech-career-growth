import { useState } from 'react';
import { Category } from '@/types/model';
import useBooleanState from '@/hooks/useBooleanState';
import { withPrivateLayout } from '@/components/hof/with-private-layout';
import CategoryTree from '@/components/category/category-tree';
import { CategoryProvider, useCategoryTree } from '@/components/category/category-context';
import ConfirmDialog from '@/components/common/confirm-dialog';
import CategoryFormDialog from '@/components/category/category-form-dialog';

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
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isDialogOpen, openDialog, closeDialog] = useBooleanState(false);
  const [isFormDialogOpen, openFormDialog, closeFormDialog] = useBooleanState(false);
  const { rootCategories } = useCategoryTree();

  const handleDeleteCategory = () => {
    console.log('Cat Id: ', selectedCategoryId);
    closeDialog();
  };

  const triggerDeleteCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    openDialog();
  };

  const triggerEditCategory = (categoryId?: string) => {
    if (categoryId) {
      setSelectedCategoryId(categoryId);
    }
    openFormDialog();
  };

  const handleSubmitAddCategory = (values: { name: string; description?: string }) => {
    console.log('Submit => ', values);
  };

  return (
    <>
      <div className="py-5 w-3/5 mx-auto">
        <div className="mt-12 flex flex-col w-full items-center justify-center bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:px-6 border-b w-full">
            <h1 className="text-3xl font-medium text-gray-900">Categories Tree</h1>
          </div>
          <div className="p-4 w-full border-t border-gray-100">
            <CategoryTree
              items={rootCategories}
              isRootLevel={true}
              triggerEditCategory={triggerEditCategory}
              triggerDeleteCategory={triggerDeleteCategory}
            />
          </div>
        </div>
      </div>
      <ConfirmDialog
        isLoading={false}
        messageText="Are you sure you want to delete this category?"
        open={isDialogOpen}
        onConfirmButtonClick={handleDeleteCategory}
        onCancelButtonClick={closeDialog}
      />
      {isFormDialogOpen && (
        <CategoryFormDialog closeDialog={closeFormDialog} handleSubmit={handleSubmitAddCategory} defaultValues={{}} />
      )}
    </>
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
