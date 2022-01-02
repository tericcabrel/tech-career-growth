import { padZero } from '@/utils/common';
import useDashboardSummary from '@/hooks/request/query/use-dashboard-summary';
import withPrivateLayout from '@/components/hof/with-private-layout';
import Loader from '@/components/common/loader';
import DashboardCard from '@/components/dashboard/card';
import CategoryIcon from '@/components/icons/category';
import ResourceIcon from '@/components/icons/resource';
import RequestIcon from '@/components/icons/request';
import ClockIcon from '@/components/icons/clock';

const Dashboard = () => {
  const { data, isLoading } = useDashboardSummary();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid gap-6 my-8 grid-cols-4">
        <DashboardCard color="blue" label="Categories" value={padZero(data?.category || 0)}>
          <CategoryIcon />
        </DashboardCard>

        <DashboardCard color="green" label="Resources" value={padZero(data?.resource || 0)}>
          <ResourceIcon />
        </DashboardCard>

        <DashboardCard color="yellow" label="Pending Requests" value={padZero(data?.pendingRequest || 0)}>
          <ClockIcon />
        </DashboardCard>

        <DashboardCard color="pink" label="Total Requests" value={padZero(data?.totalRequest || 0)}>
          <RequestIcon />
        </DashboardCard>
      </div>
    </div>
  );
};

export default withPrivateLayout(Dashboard, { title: 'Dashboard' });
