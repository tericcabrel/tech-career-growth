import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useSession } from 'next-auth/react';

import withPrivateLayout from '@/components/hof/with-private-layout';
import { NETWORK_ERROR_MESSAGE, USER_DELETED_MESSAGE } from '@/utils/constants';
import { getErrorMessage } from '@/utils/http-client';
import useBooleanState from '@/hooks/use-boolean-state';
import useRetrieveUsers from '@/hooks/request/query/use-retrieve-users';
import useDeleteUser from '@/hooks/request/mutation/use-delete-user';
import Loader from '@/components/common/loader';
import PlusIcon from '@/components/icons/plus';
import TableRowHeader from '@/components/table/table-row-header';
import TableNoRow from '@/components/table/table-no-row';
import ConfirmDialog from '@/components/common/confirm-dialog';
import UserRow from '@/components/user/user-row';

const UsersList = () => {
  const { data: userData, status } = useSession();
  const [isDialogOpen, openDialog, closeDialog] = useBooleanState(false);
  const [selectedId, setSelectedId] = useState<string | null>();

  const deleteMutation = useDeleteUser();
  const { data, isLoading, refetch } = useRetrieveUsers();

  if (isLoading || status === 'loading') {
    return <Loader />;
  }

  const onDeleteUserClick = (plannerId: string) => {
    setSelectedId(plannerId);
    openDialog();
  };

  const handleDeleteUserClick = async () => {
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
        toast.success(USER_DELETED_MESSAGE);
      },
    });
  };

  return (
    <div className="py-5">
      <div className="container px-6 mx-auto grid">
        <h1 className="text-2xl font-bold">Users List</h1>

        <div className="flex flex-col">
          <div className="py-4 flex justify-end">
            <Link href="/private/users/new">
              <a className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-600 border border-transparent rounded-lg active:bg-green-600 hover:bg-green-700 focus:outline-none focus:shadow-outline-green">
                <span className="mr-2" aria-hidden="true">
                  <PlusIcon className="w-5 h-5" />
                </span>
                New user
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
                      <TableRowHeader name="Email" />
                      <TableRowHeader name="Role" />
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Boolean(data?.length) &&
                      data?.map((item) => (
                        <UserRow
                          key={item.id}
                          item={item}
                          triggerDeleteDialog={() => onDeleteUserClick(item.id)}
                          canEdit={true}
                          canDelete={userData?.role === 'admin'}
                        />
                      ))}

                    {!Boolean(data?.length) && <TableNoRow colSpan={5} />}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDialog
        isLoading={deleteMutation.isLoading}
        open={isDialogOpen}
        onConfirmButtonClick={handleDeleteUserClick}
        onCancelButtonClick={closeDialog}
      />
    </div>
  );
};

export default withPrivateLayout(UsersList, { title: 'Users List' });
