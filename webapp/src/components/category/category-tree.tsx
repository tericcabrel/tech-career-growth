import classNames from 'classnames';
import { Category } from '@/types/model';
import { useCategoryTree } from '@/components/category/category-context';

type Props = {
  items: Category[];
  isRootLevel: boolean;
};

const CategoryTree = ({ items, isRootLevel }: Props) => {
  const { findChildren } = useCategoryTree();

  const ulClassName = classNames({
    'flex flex-col items-start w-full': true,
    'ml-4': !isRootLevel,
  });

  if (items.length === 0) {
    return null;
  }

  return (
    <ul className={ulClassName}>
      {items.map((item) => (
        <li className="text-left py-1" key={item.value}>
          <div>{item.name}</div>
          <CategoryTree items={findChildren(item.id)} isRootLevel={false} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryTree;
