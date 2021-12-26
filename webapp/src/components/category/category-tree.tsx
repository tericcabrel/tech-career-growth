import classNames from 'classnames';
import { Category } from '@/types/model';
import { useCategoryTree } from '@/components/category/category-context';
import PlusIcon from '@/components/icons/plus';
import PencilIcon from '@/components/icons/pencil';
import CrossIcon from '@/components/icons/cross';

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
            <div className="flex">
              {item.name}
              <div className="flex ml-8 space-x-2">
                {!item.parentId && (
                  <button onClick={() => triggerAddCategory(item.id)}>
                    <PlusIcon width={22} height={22} className="text-green-500" />
                  </button>
                )}
                <button onClick={() => triggerEditCategory(item.id)}>
                  <PencilIcon width={16} height={16} className="text-blue-500" />
                </button>
                <button onClick={() => triggerDeleteCategory(item.id)}>
                  <CrossIcon width={20} height={20} className="text-red-500" />
                </button>
              </div>
            </div>
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
