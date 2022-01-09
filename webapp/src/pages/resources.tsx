import dynamic from 'next/dynamic';
import { formatCategoryToCategoryChoice } from '@/utils/forms';
import useRetrieveCategories from '@/hooks/request/query/use-retrieve-categories';
import Loader from '@/components/common/loader';

const BrowseResource = dynamic(() => import('@/containers/resources/browse'));

const BrowseResourcePage = () => {
  const { data, isLoading } = useRetrieveCategories();

  if (isLoading || !data) {
    return <Loader scope="page" />;
  }

  return <BrowseResource categories={formatCategoryToCategoryChoice(data)} />;
};

export default BrowseResourcePage;
