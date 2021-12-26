import { useState } from 'react';
import { toast } from 'react-toastify';
import useBooleanState from '@/hooks/use-boolean-state';
import { withPrivateLayout } from '@/components/hof/with-private-layout';
import CategoryTree from '@/components/category/category-tree';
import { CategoryProvider, useCategoryTree } from '@/components/category/category-context';
import ConfirmDialog from '@/components/common/confirm-dialog';
import CategoryFormDialog from '@/components/category/category-form-dialog';
import { useRetrieveCategories } from '@/hooks/request/query/use-retrieve-categories';
import Loader from '@/components/common/loader';
import Button from '@/components/common/button';
import { useCreateCategory } from '@/hooks/request/mutation/use-create-category';
import { CATEGORY_CREATED_MESSAGE, NETWORK_ERROR_MESSAGE } from '@/utils/constants';
import { getErrorMessage } from '@/utils/axios';

type Props = {
  onCategoryUpdateSuccess: () => Promise<void>;
};

const CategoryView = ({ onCategoryUpdateSuccess }: Props) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [isDialogOpen, openConfirmDialog, closeConfirmDialog] = useBooleanState(false);
  const [isFormDialogOpen, openFormDialog, closeFormDialog] = useBooleanState(false);
  const { rootCategories } = useCategoryTree();
  const createCategoryMutation = useCreateCategory();

  const handleDeleteCategory = () => {
    console.log('Cat Id: ', selectedCategoryId);
    closeConfirmDialog();
  };

  const triggerDeleteCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    openConfirmDialog();
  };

  const triggerAddCategory = (categoryId?: string) => {
    if (categoryId) {
      setSelectedCategoryId(categoryId);
    }
    openFormDialog();
  };

  const triggerEditCategory = (categoryId?: string) => {
    if (categoryId) {
      setSelectedCategoryId(categoryId);
    }
    openFormDialog();
  };

  const handleSubmitAddCategory = (values: { name: string; description?: string }) => {
    const input = { ...values, parentId: selectedCategoryId ?? null };

    createCategoryMutation.mutate(input, {
      onError: (error) => {
        closeFormDialog();
        toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
      },
      onSuccess: async () => {
        await onCategoryUpdateSuccess();
        closeFormDialog();
        toast.success(CATEGORY_CREATED_MESSAGE);
      },
    });
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
              triggerAddCategory={triggerAddCategory}
              triggerEditCategory={triggerEditCategory}
              triggerDeleteCategory={triggerDeleteCategory}
            />
            <Button text="Add category" className="text-gray-500 bg-gray-500" onClick={() => triggerAddCategory()} />
          </div>
        </div>
      </div>
      <ConfirmDialog
        isLoading={false}
        messageText="Are you sure you want to delete this category?"
        open={isDialogOpen}
        onConfirmButtonClick={handleDeleteCategory}
        onCancelButtonClick={closeConfirmDialog}
      />
      {isFormDialogOpen && (
        <CategoryFormDialog closeDialog={closeFormDialog} handleSubmit={handleSubmitAddCategory} defaultValues={{}} />
      )}
    </>
  );
};

const CategoriesList = () => {
  const { data, isLoading, refetch } = useRetrieveCategories();

  console.log(data);

  const refetchCategories = async () => {
    await refetch();
  };

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <CategoryProvider value={data}>
      <CategoryView onCategoryUpdateSuccess={refetchCategories} />
    </CategoryProvider>
  );
};

export default withPrivateLayout(CategoriesList, { title: 'Categories List' });
