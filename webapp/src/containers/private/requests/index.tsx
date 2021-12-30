import { useState } from 'react';
import { toast } from 'react-toastify';
import { Request } from '@/types/model';
import { PaginationChangeEventData, SelectOption } from '@/types/common';
import useBooleanState from '@/hooks/use-boolean-state';
import { NETWORK_ERROR_MESSAGE, REQUEST_DELETED_MESSAGE, REQUEST_STATUS_OPTIONS } from '@/utils/constants';
import { getErrorMessage } from '@/utils/axios';
import { withPrivateLayout } from '@/components/hof/with-private-layout';
import SelectInput from '@/components/common/select-input';
import TableRowHeader from '@/components/table/table-row-header';
import RequestRow from '@/components/request/request-row';
import TableNoRow from '@/components/table/table-no-row';
import Pagination from '@/components/pagination/pagination';
import ConfirmDialog from '@/components/common/confirm-dialog';
import useRetrieveRequests from '@/hooks/request/query/use-retrieve-requests';
import useDeleteRequest from '@/hooks/request/mutation/use-delete-request';
import RequestReplyFormDialog from '@/components/request/request-reply-form-dialog';

type RequestParams = {
  status: SelectOption;
  page: number;
};

const RequestsList = () => {
  const [isConfirmDialogOpen, openConfirmDialog, closeConfirmDialog] = useBooleanState(false);
  const [isEditingRequest, setEditingRequest] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>();
  const [searchParams, setSearchParams] = useState<RequestParams>({
    page: 1,
    status: REQUEST_STATUS_OPTIONS[0],
  });
  const deleteMutation = useDeleteRequest();
  const { data, refetch } = useRetrieveRequests(
    {
      page: searchParams.page,
      status: searchParams.status?.value,
    },
    { keepPreviousData: true, refetchOnWindowFocus: false },
  );

  const onDeleteRequestClick = (item: Request) => {
    setSelectedRequest(item);
    openConfirmDialog();
  };

  const onEditRequestClick = (item: Request) => {
    setSelectedRequest(item);
    setEditingRequest(true);
  };

  const handleDeleteRequestClick = async () => {
    if (!selectedRequest) {
      return;
    }

    deleteMutation.mutate(selectedRequest.id, {
      onError: (error) => {
        closeConfirmDialog();
        toast.error(getErrorMessage(error) || NETWORK_ERROR_MESSAGE);
      },
      onSuccess: async () => {
        await refetch();
        closeConfirmDialog();
        toast.success(REQUEST_DELETED_MESSAGE);
      },
    });
  };

  const handleStatusChange = (value: SelectOption) => {
    setSearchParams((prevValue) => ({
      ...prevValue,
      page: 1,
      status: value,
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
        <h1 className="text-4xl font-bold">Requests List</h1>
        <div className="flex flex-col">
          <div className="py-4 flex justify-between">
            <SelectInput options={REQUEST_STATUS_OPTIONS} value={searchParams.status} onChange={handleStatusChange} />
          </div>
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <TableRowHeader name="User name" />
                      <TableRowHeader name="User email" />
                      <TableRowHeader name="Category" />
                      <TableRowHeader name="Status" />
                      <TableRowHeader name="Created At" />
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Boolean(data?.items.length) &&
                      data?.items.map((item) => (
                        <RequestRow
                          key={item.id}
                          item={item}
                          triggerDeleteDialog={() => onDeleteRequestClick(item)}
                          triggerEditDialog={() => onEditRequestClick(item)}
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
        open={isConfirmDialogOpen}
        onConfirmButtonClick={handleDeleteRequestClick}
        onCancelButtonClick={closeConfirmDialog}
      />

      {isEditingRequest && selectedRequest && (
        <RequestReplyFormDialog closeDialog={() => setEditingRequest(false)} request={selectedRequest} />
      )}
    </div>
  );
};

export default withPrivateLayout(RequestsList, { title: 'Requests List' });
