import dynamic from 'next/dynamic';
import { formatCategoryToCategoryChoice } from '@/utils/forms';
import useRetrieveCategories from '@/hooks/request/query/use-retrieve-categories';
import Loader from '@/components/common/loader';

const RequestResource = dynamic(() => import('@/containers/resources/request'));

const RequestResourcePage = () => {
  const { data, isLoading } = useRetrieveCategories();

  if (isLoading || !data) {
    return <Loader scope="page" />;
  }

  return <RequestResource categories={formatCategoryToCategoryChoice(data)} />;
};

export default RequestResourcePage;
