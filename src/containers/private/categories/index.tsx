import { CategoryProvider } from '@/components/category/category-context';
import withPrivateLayout from '@/components/hof/with-private-layout';
import useRetrieveCategories from '@/hooks/request/query/use-retrieve-categories';
import Loader from '@/components/common/loader';
import CategoryView from '@/containers/private/categories/view';

const CategoriesList = () => {
  const { data, isLoading, refetch } = useRetrieveCategories();

  const refetchCategories = async () => {
    await refetch();
  };

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <CategoryProvider value={data}>
      <CategoryView onCategoryUpdateSuccess={refetchCategories} />
    </CategoryProvider>
  );
};

export default withPrivateLayout(CategoriesList, { title: 'Categories List' });
