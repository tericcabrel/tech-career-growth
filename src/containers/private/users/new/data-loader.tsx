import withPrivateLayout from '@/components/hof/with-private-layout';
import Loader from '@/components/common/loader';
import NewUser from '@/containers/private/users/new/form';
import useRetrieveRoles from '@/hooks/request/query/use-retrieve-roles';

const NewUserDataLoader = () => {
  const { isLoading, data } = useRetrieveRoles();

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && data) {
    return <NewUser roles={data} />;
  }

  return null;
};

export default withPrivateLayout(NewUserDataLoader, { title: 'New user' });
