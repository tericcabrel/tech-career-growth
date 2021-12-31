import withPrivateLayout from '@/components/hof/with-private-layout';

const Dashboard = () => {
  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </div>
  );
};

export default withPrivateLayout(Dashboard, { title: 'Dashboard' });
