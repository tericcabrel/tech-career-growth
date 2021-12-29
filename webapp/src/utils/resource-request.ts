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

export const updateCategoryChoices = (currentCategoryChoices: CategoryTree[], selectedCategoryId: string) => {
  const selectedCategory = currentCategoryChoices.find((categoryChoice) => categoryChoice.id === selectedCategoryId);

  if (!selectedCategory) {
    return;
  }

  return currentCategoryChoices.slice().map((categoryChoice) => {
    if (categoryChoice.id === selectedCategoryId) {
      return {
        ...categoryChoice,
        isChecked: !categoryChoice.isChecked,
      };
    }

    if (categoryChoice.parentId === selectedCategory.parentId) {
      return {
        ...categoryChoice,
        isChecked: false,
      };
    }

    if (categoryChoice.parentId === selectedCategory.id && categoryChoice.isChecked) {
      return {
        ...categoryChoice,
        isChecked: false,
      };
    }

    return categoryChoice;
  });
};
