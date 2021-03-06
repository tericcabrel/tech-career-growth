import React, { PropsWithChildren, useContext } from 'react';
import { Category } from '@/types/model';

export const CategoryContext = React.createContext<Category[]>([]);

const CategoryProvider = ({ children, value }: PropsWithChildren<{ value: Category[] }>) => {
  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};

const useCategoryTree = () => {
  const categories = useContext(CategoryContext);

  const rootCategories = categories.filter((category) => category.parentId === null);

  const findChildren = (categoryParentId: string) => {
    return categories.filter((category) => category.parentId === categoryParentId);
  };

  const findCategory = (categoryId: string) => {
    return categories.find((category) => category.id === categoryId);
  };

  return {
    rootCategories,
    findChildren,
    findCategory,
  };
};

export { CategoryProvider, useCategoryTree };
