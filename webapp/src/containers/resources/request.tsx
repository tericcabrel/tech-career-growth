import { useState } from 'react';
import { CategoryTree } from '@/types/common';
import { buildCategoryTree } from '@/utils/forms';
import withPublicLayout from '@/components/hof/with-public-layout';
import Button from '@/components/common/button';
import CategoryChoiceSelector from '@/components/request/category-choice-selector';
import { CATEGORY_CHOICE_NOT_SELECTED } from '@/utils/constants';

type Props = {
  categories: CategoryTree[];
};

const findCheckedCategoryChoice = (categoryChoices: CategoryTree[]) => {
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

const RequestResource = ({ categories }: Props) => {
  const [choices, setChoices] = useState(categories);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryChoiceChange = (categoryId: string) => {
    const selectedCategory = choices.find((choice) => choice.id === categoryId);

    if (!selectedCategory) {
      return;
    }

    const updatedChoices = choices.slice().map((choice) => {
      if (choice.id === categoryId) {
        return {
          ...choice,
          isSelected: !choice.isChecked,
        };
      }

      if (choice.parentId === selectedCategory.parentId) {
        return {
          ...choice,
          isSelected: false,
        };
      }

      if (choice.parentId === selectedCategory.id && choice.isChecked) {
        return {
          ...choice,
          isSelected: false,
        };
      }

      return choice;
    });

    setChoices(updatedChoices);
  };

  const handleSearchResource = () => {
    const checkedCategoryChoice = findCheckedCategoryChoice(choices);

    if (!checkedCategoryChoice) {
      setError(CATEGORY_CHOICE_NOT_SELECTED);
      return;
    }

    setError(null);
    console.log(checkedCategoryChoice);
  };

  return (
    <div className="py-2">
      <div className="w-2/3 p-6 mx-auto">
        <h1 className="text-4xl font-bold">Request a resource</h1>
        <div className="mt-4 text-xl">
          Tell us what kind of resources you currently need in your career growth journey and we&apos;ll provide you
          with the relevant resources.
        </div>
        {error && (
          <div className="w-full mt-5 py-2 text-base font-semibold text-red-500 text-center border-2 border-red-500 rounded">
            {error}
          </div>
        )}
        <h2 className="font-bold mt-6 mb-2">What do you need help with?</h2>

        <CategoryChoiceSelector choices={buildCategoryTree(choices)} onChoiceChange={handleCategoryChoiceChange} />

        <div className="flex justify-between mt-8 space-x-10">
          <Button text="Search" className="w-56 justify-center" loading={false} onClick={handleSearchResource} />
          <Button
            text="I didn't find a resource"
            className="bg-gray-500 text-white w-56 hover:bg-gray-600 justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default withPublicLayout(RequestResource, { title: 'Request a resource' });
