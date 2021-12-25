import { withPrivateLayout } from '@/components/hof/with-private-layout';

const CategoriesList = () => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold">Categories List</h1>
    </div>
  );
};

export default withPrivateLayout(CategoriesList, { title: 'Categories List' });
