import dynamic from 'next/dynamic';

const Requests = dynamic(() => import('@/containers/private/requests'));

const RequestsPage = () => {
  return <Requests />;
};

RequestsPage.auth = {
  redirectTo: '/',
};

export default RequestsPage;
