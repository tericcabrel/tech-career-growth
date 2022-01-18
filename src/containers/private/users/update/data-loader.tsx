import { useRouter } from 'next/router';

import withPrivateLayout from '@/components/hof/with-private-layout';
import Loader from '@/components/common/loader';
import UpdateUser from '@/containers/private/users/update/form';
import ResourceNotFound from '@/components/common/resource-not-found';
import useRetrieveUser from '@/hooks/request/query/use-retrieve-user';
import useRetrieveRoles from '@/hooks/request/query/use-retrieve-roles';

const UpdateUserDataLoader = () => {
  const { query } = useRouter();

  const { data: rolesData, isLoading: isRolesLoading } = useRetrieveRoles();
  const { data: userData, isLoading: isUserLoading } = useRetrieveUser(query.id as string, {
    enabled: Boolean(query.id),
  });

  const isLoading = isRolesLoading || isUserLoading;

  if (isLoading || isLoading) {
    return <Loader />;
  }

  if (!isLoading && rolesData && userData) {
    return <UpdateUser roles={rolesData} user={userData} />;
  }

  return <ResourceNotFound name="User" />;
};

export default withPrivateLayout(UpdateUserDataLoader, { title: 'Edit user' });
