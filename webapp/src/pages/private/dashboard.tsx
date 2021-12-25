import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('@/containers/private/dashboard'));

const DashboardPage = () => {
  return <Dashboard />;
};

DashboardPage.auth = {
  redirectTo: '/',
};

export default DashboardPage;
