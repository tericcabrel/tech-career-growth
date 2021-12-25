import { withPrivateLayout } from '@/components/hof/with-private-layout';

const ResourcesList = () => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold">Resources List</h1>
    </div>
  );
};

export default withPrivateLayout(ResourcesList, { title: 'Resources List' });
