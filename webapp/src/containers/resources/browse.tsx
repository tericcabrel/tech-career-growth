import { useEffect, useState } from 'react';
import { CategoryTree } from '@/types/common';
import { Resource } from '@/types/model';
import { buildCategoryTree, excludeCategoryWithChildren, formatOptions } from '@/utils/forms';
import { CATEGORY_CHOICE_NOT_SELECTED } from '@/utils/constants';
import { findCheckedCategoryChoice, updateCategoryChoices } from '@/utils/resource-request';
import useBooleanState from '@/hooks/use-boolean-state';
import useLookupResources from '@/hooks/request/query/use-lookup-resources';
import withPublicLayout from '@/components/hof/with-public-layout';
import Button from '@/components/common/button';
import CategoryChoiceSelector from '@/components/request/category-choice-selector';
import RequestFormDialog from '@/components/request/request-form-dialog';
import RequestResourceResult from '@/components/request/request-resource-result';

type Props = {
  categories: CategoryTree[];
};

const RequestResource = ({ categories }: Props) => {
  const [categoryChoices, setCategoryChoices] = useState(categories);
  const [error, setError] = useState<string | null>(null);
  const [isDialogOpen, openDialog, closeDialog] = useBooleanState(false);
  const [search, setSearch] = useState<string | null>(null);
  const [searchResult, setSearchResult] = useState<Resource[] | null>(null);

  const { refetch } = useLookupResources(
    { search },
    {
      enabled: Boolean(search),
      keepPreviousData: false,
      cacheTime: 0,
      onSuccess: (data) => {
        setSearchResult(data);
      },
    },
  );

  useEffect(() => {
    if (search) {
      refetch();
    }
  }, [refetch, search]);

  const handleCategoryChoiceChange = async (categoryId: string) => {
    const updatedCategoryChoices = updateCategoryChoices(categoryChoices, categoryId);

    setSearch(null);

    if (!updatedCategoryChoices) {
      return;
    }

    setCategoryChoices(updatedCategoryChoices);

    const checkedCategoryChoice = findCheckedCategoryChoice(updatedCategoryChoices);

    if (!checkedCategoryChoice) {
      setError(CATEGORY_CHOICE_NOT_SELECTED);
      return;
    } else {
      setError(null);
      setSearchResult(null);
      setSearch(checkedCategoryChoice.id);
    }
  };

  return (
    <>
      <div className="py-2">
        <div className="w-2/3 p-6 mx-auto">
          <h1 className="text-4xl font-bold">Find a resource</h1>
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

          <CategoryChoiceSelector
            choices={buildCategoryTree(categoryChoices)}
            onChoiceChange={handleCategoryChoiceChange}
          />

          {Boolean(search) && searchResult && <RequestResourceResult data={searchResult} />}

          <div className="flex justify-end mt-8 space-x-10">
            <Button
              text="I didn't find a resource"
              className="bg-gray-500 text-white w-56 hover:bg-gray-600 justify-center"
              onClick={() => openDialog()}
            />
          </div>
        </div>
      </div>
      {isDialogOpen && (
        <RequestFormDialog
          closeDialog={closeDialog}
          categoryOptions={formatOptions(excludeCategoryWithChildren(categoryChoices))}
        />
      )}
    </>
  );
};

export default withPublicLayout(RequestResource, { title: 'Find resources' });
