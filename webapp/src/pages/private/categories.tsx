import dynamic from 'next/dynamic';

const Categories = dynamic(() => import('@/containers/private/categories'));

const CategoriesPage = () => {
  return <Categories />;
};

CategoriesPage.auth = {
  redirectTo: '/',
};

export default CategoriesPage;
