import { useState } from 'react';
import useBooleanState from '@/hooks/use-boolean-state';
import { withPrivateLayout } from '@/components/hof/with-private-layout';
import CategoryTree from '@/components/category/category-tree';
import { CategoryProvider, useCategoryTree } from '@/components/category/category-context';
import ConfirmDialog from '@/components/common/confirm-dialog';
import CategoryFormDialog from '@/components/category/category-form-dialog';
import { useRetrieveCategories } from '@/hooks/request/use-retrieve-categories';
import Loader from '@/components/common/loader';
import Button from '@/components/common/button';

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
            <Button text="Add category" className="text-gray-500 bg-gray-500" onClick={() => triggerEditCategory()} />
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
  const { data, isLoading } = useRetrieveCategories();

  console.log(data);

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <CategoryProvider value={data}>
      <CategoryView />
    </CategoryProvider>
  );
};

export default withPrivateLayout(CategoriesList, { title: 'Categories List' });
