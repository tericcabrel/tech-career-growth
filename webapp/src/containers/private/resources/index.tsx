import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

import { PaginationChangeEventData, SelectOption } from '@/types/common';
import { withPrivateLayout } from '@/components/hof/with-private-layout';
import ConfirmDialog from '@/components/common/confirm-dialog';
import useBooleanState from '@/hooks/use-boolean-state';
import useRetrieveCategories from '@/hooks/request/query/use-retrieve-categories';
import { DEFAULT_RESOURCE, NETWORK_ERROR_MESSAGE, RESOURCE_DELETED_MESSAGE } from '@/utils/constants';
import { getErrorMessage } from '@/utils/axios';
import PlusIcon from '@/components/icons/plus';
import SelectInput from '@/components/common/select-input';
import { formatCategoryOption } from '@/utils/forms';
import Pagination from '@/components/pagination/pagination';
import SearchIcon from '@/components/icons/search';
import TableRowHeader from '@/components/table/table-row-header';
import TableNoRow from '@/components/table/table-no-row';
import ResourceRow from '@/components/resource/resource-row';
import useDeleteResource from '@/hooks/request/mutation/use-delete-resource';
import useRetrieveResources from '@/hooks/request/query/use-retrieve-resources';

type ResourceSearchParams = {
  category: SelectOption;
  page: number;
  search?: string;
};

const ResourcesList = () => {
  const [isDialogOpen, openDialog, closeDialog] = useBooleanState(false);
  const [selectedId, setSelectedId] = useState<string | null>();
  const [searchParams, setSearchParams] = useState<ResourceSearchParams>({
    page: 1,
    search: undefined,
    category: DEFAULT_RESOURCE,
  });

  const deleteMutation = useDeleteResource();
  const { data: categoryListData } = useRetrieveCategories();

  const { data, refetch } = useRetrieveResources(
    {
      page: searchParams.page,
      search: searchParams.search,
      category: searchParams.category?.value,
    },
    { keepPreviousData: true, refetchOnWindowFocus: false },
  );

  const onDeleteResourceClick = (id: string) => {
    setSelectedId(id);
    openDialog();
  };

  const handleDeleteResourceClick = async () => {
    if (!selectedId) {
      return;
    }

    deleteMutation.mutate(selectedId, {
      onError: (error) => {
        closeDialog();
        toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
      },
      onSuccess: async () => {
        await refetch();
        closeDialog();
        toast.success(RESOURCE_DELETED_MESSAGE);
      },
    });
  };

  const handleYearGroupChange = (value: SelectOption) => {
    setSearchParams((prevValue) => ({
      ...prevValue,
      page: 1,
      category: value,
    }));
  };

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevValue) => ({
      ...prevValue,
      page: 1,
      search: event.target.value,
    }));
  };

  const onPaginationChange = async (eventData: PaginationChangeEventData) => {
    setSearchParams((prevValue) => ({
      ...prevValue,
      page: eventData.currentPage,
    }));
  };

  return (
    <div className="py-5">
      <div className="container px-6 mx-auto grid">
        <h1 className="text-4xl font-bold">Resources List</h1>
        <div className="flex flex-col">
          <div className="py-4 flex justify-between">
            <div className="flex w-auto">
              <div className="relative mr-6 text-gray-500 focus-within:text-green-600 dark:focus-within:text-green-400">
                <input
                  className="block w-full pl-10 mt-1 text-sm text-black border-gray-300 shadow-sm rounded-md focus:border-green-400 focus:outline-none focus:shadow-outline-green"
                  placeholder="Jane Doe"
                  type="search"
                  value={searchParams.search}
                  onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 flex items-center ml-3 pointer-events-none">
                  <SearchIcon className="h-5 w-5" />
                </div>
              </div>

              <SelectInput
                options={formatCategoryOption(categoryListData || [])}
                value={searchParams.category}
                onChange={handleYearGroupChange}
              />
            </div>

            <Link href="/private/resources/new">
              <a className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                <span className="mr-2" aria-hidden="true">
                  <PlusIcon className="w-5 h-5" />
                </span>
                New resource
              </a>
            </Link>
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <TableRowHeader name="Name" />
                      <TableRowHeader name="Category" />
                      <TableRowHeader name="Type" />
                      <TableRowHeader name="Link" />
                      <TableRowHeader name="Created At" />
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Boolean(data?.items.length) &&
                      data?.items.map((item) => (
                        <ResourceRow
                          key={item.id}
                          item={item}
                          triggerDeleteDialog={() => onDeleteResourceClick(item.id)}
                        />
                      ))}

                    {!Boolean(data?.items.length) && <TableNoRow colSpan={7} />}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {data?.items && data?.items.length > 0 && (
            <Pagination
              currentPage={searchParams.page}
              itemPerPage={data.limit}
              pageItems={data.totalPages}
              totalItems={data.totalItems}
              onPageChange={onPaginationChange}
            />
          )}
        </div>
      </div>
      <ConfirmDialog
        isLoading={false}
        open={isDialogOpen}
        onConfirmButtonClick={handleDeleteResourceClick}
        onCancelButtonClick={closeDialog}
      />
    </div>
  );
};

export default withPrivateLayout(ResourcesList, { title: 'Resources List' });
