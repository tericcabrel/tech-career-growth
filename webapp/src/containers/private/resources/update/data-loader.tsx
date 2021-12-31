import { useRouter } from 'next/router';

import withPrivateLayout from '@/components/hof/with-private-layout';
import useRetrieveCategories from '@/hooks/request/query/use-retrieve-categories';
import Loader from '@/components/common/loader';
import useRetrieveResource from '@/hooks/request/query/use-retrieve-resource';
import UpdateResource from '@/containers/private/resources/update/form';
import ResourceNotFound from '@/components/common/resource-not-found';

const UpdateResourceDataLoader = () => {
  const { query } = useRouter();

  const { data, isLoading } = useRetrieveResource(query.id as string, { enabled: Boolean(query.id) });
  const { isLoading: isCategoriesLoading, data: categoryListData } = useRetrieveCategories();

  const loading = isLoading || isCategoriesLoading;

  if (loading) {
    return <Loader />;
  }

  if (!loading && data && categoryListData) {
    return <UpdateResource resource={data} categories={categoryListData} />;
  }

  return <ResourceNotFound name="Resource" />;
};

export default withPrivateLayout(UpdateResourceDataLoader, { title: 'Edit resource' });
