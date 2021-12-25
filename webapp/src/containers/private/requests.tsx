import { withPrivateLayout } from '@/components/hof/with-private-layout';

const RequestsList = () => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold">Requests List</h1>
    </div>
  );
};

export default withPrivateLayout(RequestsList, { title: 'Requests List' });
