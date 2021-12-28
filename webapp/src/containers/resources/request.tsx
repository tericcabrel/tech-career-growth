import { useState } from 'react';
import { CategoryTree } from '@/types/common';
import { buildCategoryTree } from '@/utils/forms';
import withPublicLayout from '@/components/hof/with-public-layout';
import Button from '@/components/common/button';
import CategoryChoiceSelector from '@/components/request/category-choice-selector';

type Props = {
  categories: CategoryTree[];
};

const RequestResource = ({ categories }: Props) => {
  const [choices, setChoices] = useState(categories);

  const handleCategoryChoiceChange = (categoryId: string) => {
    const selectedCategory = choices.find((choice) => choice.id === categoryId);

    if (!selectedCategory) {
      return;
    }

    const updatedChoices = choices.slice().map((choice) => {
      if (choice.id === categoryId) {
        return {
          ...choice,
          isSelected: !choice.isSelected,
        };
      }

      if (choice.parentId === selectedCategory.parentId) {
        return {
          ...choice,
          isSelected: false,
        };
      }

      if (choice.parentId === selectedCategory.id && choice.isSelected) {
        return {
          ...choice,
          isSelected: false,
        };
      }

      return choice;
    });

    setChoices(updatedChoices);
  };

  return (
    <div className="py-2">
      <div className="w-2/3 p-6 mx-auto">
        <h1 className="text-4xl font-bold">Request a resource</h1>
        <div className="mt-4 text-xl">
          Tell us what kind of resources you currently need in your career growth journey and we&apos;ll provide you
          with the relevant resources.
        </div>
        <h2 className="font-bold mt-6 mb-2">What do you need help with?</h2>

        <CategoryChoiceSelector choices={buildCategoryTree(choices)} onChoiceChange={handleCategoryChoiceChange} />

        <div className="flex justify-between mt-8 space-x-10">
          <Button text="Search" className="w-56 justify-center" loading={false} />
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
