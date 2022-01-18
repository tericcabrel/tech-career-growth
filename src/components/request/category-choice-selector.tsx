import classNames from 'classnames';
import { CategoryTree } from '@/types/common';

type Props = {
  choices: CategoryTree[];
  onChoiceChange: (categoryId: string) => void;
  isRoot?: boolean;
  name?: string;
};

const CategoryChoiceSelector = ({ choices, onChoiceChange, isRoot = true, name = 'category-0' }: Props) => {
  const groupListClassName = classNames({
    'space-y-2': true,
    'ml-8 pt-2': !isRoot,
  });

  return (
    <div className={groupListClassName}>
      {choices.map((choice) => (
        <div key={choice.id}>
          <div>
            <label
              htmlFor={`category-${choice.id}`}
              className="block space-x-2 border-2 border-green-500 py-1 px-1 w-[300px] rounded cursor-pointer"
            >
              <input
                type="radio"
                onChange={() => onChoiceChange(choice.id)}
                checked={choice.isChecked}
                id={`category-${choice.id}`}
                name={name}
                className="text-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <span className="text-sm">{choice.name}</span>
            </label>
          </div>
          {choice.isChecked && choice.children.length > 0 && (
            <CategoryChoiceSelector
              choices={choice.children}
              onChoiceChange={onChoiceChange}
              isRoot={false}
              name={`category-${choice.value}`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryChoiceSelector;
