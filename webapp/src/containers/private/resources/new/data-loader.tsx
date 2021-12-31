import withPrivateLayout from '@/components/hof/with-private-layout';
import useRetrieveCategories from '@/hooks/request/query/use-retrieve-categories';
import Loader from '@/components/common/loader';
import NewResource from '@/containers/private/resources/new/form';

const NewResourceDataLoader = () => {
  const { isLoading, data: categoryListData } = useRetrieveCategories();

  if (isLoading) {
    return <Loader />;
  }

  if (!isLoading && categoryListData) {
    return <NewResource categories={categoryListData} />;
  }

  return null;
};

export default withPrivateLayout(NewResourceDataLoader, { title: 'New resource' });
