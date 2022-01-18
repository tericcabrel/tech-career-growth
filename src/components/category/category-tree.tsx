import classNames from 'classnames';
import { Category } from '@/types/model';
import { useCategoryTree } from '@/components/category/category-context';
import CategoryTreeAction from '@/components/category/category-tree-action';

type Props = {
  items: Category[];
  isRootLevel: boolean;
  triggerDeleteCategory: (categoryId: string) => void;
  triggerAddCategory: (categoryId?: string) => void;
  triggerEditCategory: (categoryId?: string) => void;
};

const CategoryTree = ({
  items,
  isRootLevel,
  triggerAddCategory,
  triggerEditCategory,
  triggerDeleteCategory,
}: Props) => {
  const { findChildren } = useCategoryTree();

  const ulClassName = classNames({
    'flex flex-col items-start w-full': true,
    'ml-4': !isRootLevel,
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <>
      <ul className={ulClassName}>
        {items.map((item) => (
          <li className="text-left py-1" key={item.value}>
            <CategoryTreeAction
              item={item}
              onAddCategoryClick={triggerAddCategory}
              onDeleteCategoryClick={triggerDeleteCategory}
              onEditCategoryClick={triggerEditCategory}
            />
            <CategoryTree
              items={findChildren(item.id)}
              isRootLevel={false}
              triggerAddCategory={triggerAddCategory}
              triggerEditCategory={triggerEditCategory}
              triggerDeleteCategory={triggerDeleteCategory}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoryTree;
