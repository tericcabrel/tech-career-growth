import dynamic from 'next/dynamic';

const PageNotFound = dynamic(() => import('@/containers/page-not-found'));

const NotFoundPage = () => {
  return <PageNotFound />;
};

export default NotFoundPage;
