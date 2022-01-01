import { CategoryTree, PartialCategory, SelectOption } from '@/types/common';
import { Category } from '@/types/model';
import { DEFAULT_RESOURCE } from '@/utils/constants';

export const getInputErrorMessage = (formErrors: Record<string, any>, inputName?: string) => {
  if (!inputName) {
    return;
  }

  if (inputName in formErrors) {
    return formErrors[inputName].message;
  }
};

export const formatCategoryOption = (categories: Category[]) => {
  const resourceOptions = categories.map((category): SelectOption => ({ label: category.name, value: category.id }));

  return [DEFAULT_RESOURCE].concat(resourceOptions);
};

export const formatOptions = <T extends { id: string; name: string }>(data: T[]) => {
  return data.map((item): SelectOption => ({ label: item.name, value: item.id }));
};

export const formatCategoryToCategoryChoice = (categories: PartialCategory[]): CategoryTree[] => {
  return categories.map((category) => ({
    ...category,
    isChecked: false,
    children: [],
  }));
};

export const buildCategoryTree = (categories: CategoryTree[], parentId?: string | null): CategoryTree[] => {
  const result: CategoryTree[] = [];

  if (parentId) {
    return categories
      .filter((category) => category.parentId === parentId)
      .map((c) => ({
        ...c,
        children: buildCategoryTree(categories, c.id),
      }));
  }

  for (const category of categories) {
    if (!category.parentId) {
      result.push({
        ...category,
        children: buildCategoryTree(categories, category.id),
      });
    }
  }

  return result;
};

export const excludeCategoryWithChildren = <T extends { id: string; parentId: string | null }>(categories: T[]) => {
  return categories.filter((category) => {
    return (
      category.parentId ||
      (!category.parentId && !categories.some((subCategory) => subCategory.parentId === category.id))
    );
  });
};
