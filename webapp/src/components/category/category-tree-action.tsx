import classNames from 'classnames';

import { Category } from '@/types/model';
import useHover from '@/hooks/use-hover';
import PlusIcon from '@/components/icons/plus';
import PencilIcon from '@/components/icons/pencil';
import CrossIcon from '@/components/icons/cross';
import FolderIcon from '@/components/icons/folder';

type Props = {
  item: Category;
  onAddCategoryClick: (categoryId: string) => void;
  onEditCategoryClick: (categoryId: string) => void;
  onDeleteCategoryClick: (categoryId: string) => void;
};

const CategoryTreeAction = ({ item, onAddCategoryClick, onDeleteCategoryClick, onEditCategoryClick }: Props) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const categoryActionClassName = classNames({
    'flex ml-8 space-x-2': true,
    hidden: !isHovered,
  });

  return (
    <div className="flex" ref={hoverRef}>
      <div className="flex space-x-1 cursor-default">
        <FolderIcon /> <div>{item.name}</div>
      </div>
      <div className={categoryActionClassName}>
        {!item.parentId && (
          <button onClick={() => onAddCategoryClick(item.id)}>
            <PlusIcon width={22} height={22} className="text-green-500" />
          </button>
        )}
        <button onClick={() => onEditCategoryClick(item.id)}>
          <PencilIcon width={16} height={16} className="text-blue-500" />
        </button>
        <button onClick={() => onDeleteCategoryClick(item.id)}>
          <CrossIcon width={20} height={20} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CategoryTreeAction;
