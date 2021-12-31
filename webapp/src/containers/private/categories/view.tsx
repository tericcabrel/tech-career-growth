import { useState } from 'react';
import { toast } from 'react-toastify';
import { Category } from '@/types/model';
import useBooleanState from '@/hooks/use-boolean-state';
import { useCategoryTree } from '@/components/category/category-context';
import useCreateCategory from '@/hooks/request/mutation/use-create-category';
import useDeleteCategory from '@/hooks/request/mutation/use-delete-category';
import { useUpdateCategory } from '@/hooks/request/mutation/use-update-category';
import { getErrorMessage } from '@/utils/http-client';
import {
  CATEGORY_CREATED_MESSAGE,
  CATEGORY_DELETED_MESSAGE,
  CATEGORY_UPDATED_MESSAGE,
  NETWORK_ERROR_MESSAGE,
} from '@/utils/constants';
import Button from '@/components/common/button';
import CategoryTree from '@/components/category/category-tree';
import ConfirmDialog from '@/components/common/confirm-dialog';
import CategoryFormDialog from '@/components/category/category-form-dialog';

type Props = {
  onCategoryUpdateSuccess: () => Promise<void>;
};

const CategoryView = ({ onCategoryUpdateSuccess }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isDialogOpen, openConfirmDialog, closeConfirmDialog] = useBooleanState(false);
  const [isFormDialogOpen, openFormDialog, closeFormDialog] = useBooleanState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { rootCategories, findCategory } = useCategoryTree();
  const createCategoryMutation = useCreateCategory();
  const deleteCategoryMutation = useDeleteCategory();
  const updateCategoryMutation = useUpdateCategory();

  const handleDeleteCategory = () => {
    if (!selectedCategory) {
      return;
    }

    deleteCategoryMutation.mutate(selectedCategory.id, {
      onError: (error) => {
        closeConfirmDialog();
        toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
      },
      onSuccess: async () => {
        await onCategoryUpdateSuccess();
        closeConfirmDialog();
        toast.success(CATEGORY_DELETED_MESSAGE);
      },
    });
  };

  const triggerDeleteCategory = (categoryId: string) => {
    const category = findCategory(categoryId);
    if (!category) {
      return;
    }
    setSelectedCategory(category);
    openConfirmDialog();
  };

  const triggerAddCategory = (categoryId?: string) => {
    const category = categoryId ? findCategory(categoryId) : null;

    setSelectedCategory(category || null);
    setIsEditing(false);

    openFormDialog();
  };

  const triggerEditCategory = (categoryId?: string) => {
    const category = categoryId ? findCategory(categoryId) : null;

    if (category) {
      setSelectedCategory(category);
      setIsEditing(true);
      openFormDialog();
    }
  };

  const handleSubmitAddCategory = (values: { name: string; description?: string }) => {
    const input = { ...values, parentId: selectedCategory?.id ?? null };

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

  const handleSubmitEditCategory = (values: { name: string; description?: string }) => {
    if (!selectedCategory) {
      return;
    }
    const input = { ...values, id: selectedCategory.id };

    updateCategoryMutation.mutate(input, {
      onError: (error) => {
        closeFormDialog();
        toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
      },
      onSuccess: async () => {
        await onCategoryUpdateSuccess();
        closeFormDialog();
        toast.success(CATEGORY_UPDATED_MESSAGE);
      },
    });
  };

  const formDefaultValues = isEditing
    ? { name: selectedCategory?.name, description: selectedCategory?.description || undefined }
    : {};

  return (
    <>
      <div className="py-5 w-3/5 mx-auto">
        <div className="mt-12 flex flex-col w-full items-center justify-center bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:px-6 border-b w-full">
            <h1 className="text-3xl font-medium text-gray-900">Categories Tree</h1>
          </div>
          <div className="py-4 px-7 w-full border-t border-gray-100">
            <Button
              text="Add a category"
              bgColor="primary"
              className="!py-1 !text-sm mb-4"
              onClick={() => triggerAddCategory()}
            />

            <CategoryTree
              items={rootCategories}
              isRootLevel={true}
              triggerAddCategory={triggerAddCategory}
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
        onCancelButtonClick={closeConfirmDialog}
      />
      {isFormDialogOpen && (
        <CategoryFormDialog
          closeDialog={closeFormDialog}
          handleSubmit={isEditing ? handleSubmitEditCategory : handleSubmitAddCategory}
          isEditing={isEditing}
          defaultValues={formDefaultValues}
        />
      )}
    </>
  );
};

export default CategoryView;
