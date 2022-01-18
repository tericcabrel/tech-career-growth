import { CategoryTree } from '@/types/common';

export const findCheckedCategoryChoice = (categoryChoices: CategoryTree[]) => {
  const checkedCategoryChoices = categoryChoices.filter((category) => category.isChecked);
  const checkedCategoryChoicesLength = checkedCategoryChoices.length;

  if (checkedCategoryChoicesLength === 0) {
    return;
  }

  if (checkedCategoryChoicesLength === 1) {
    const [checkedCategory] = checkedCategoryChoices;
    const hasChildren = categoryChoices.some((category) => category.parentId === checkedCategory.id);

    if (!hasChildren) {
      return checkedCategory;
    }

    return;
  }

  return checkedCategoryChoices.find((category) => Boolean(category.parentId));
};

const uncheckSiblingsAndChildren = (
  currentCategoryChoices: CategoryTree[],
  selectedCategoryParentId: string | null,
) => {
  const siblingCategoryChoice = currentCategoryChoices.find(
    (category) => category.parentId === selectedCategoryParentId && category.isChecked,
  );

  if (!siblingCategoryChoice) {
    return currentCategoryChoices;
  }

  return currentCategoryChoices.slice().map((categoryChoice) => {
    if (siblingCategoryChoice.id === categoryChoice.id || categoryChoice.parentId === siblingCategoryChoice.id) {
      return {
        ...categoryChoice,
        isChecked: false,
      };
    }

    return categoryChoice;
  });
};

export const updateCategoryChoices = (currentCategoryChoices: CategoryTree[], selectedCategoryId: string) => {
  const selectedCategory = currentCategoryChoices.find((categoryChoice) => categoryChoice.id === selectedCategoryId);

  if (!selectedCategory) {
    return;
  }

  const updatedCategoriesChoice = uncheckSiblingsAndChildren(currentCategoryChoices, selectedCategory.parentId);

  return updatedCategoriesChoice.map((categoryChoice) => {
    if (categoryChoice.id === selectedCategoryId) {
      return {
        ...categoryChoice,
        isChecked: !categoryChoice.isChecked,
      };
    }

    return categoryChoice;
  });
};
