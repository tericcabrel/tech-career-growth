import dynamic from 'next/dynamic';

const RequestResource = dynamic(() => import('@/containers/resources/request'));

const RequestResourcePage = () => {
  return <RequestResource />;
};

export default RequestResourcePage;
