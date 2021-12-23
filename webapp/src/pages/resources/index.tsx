import dynamic from 'next/dynamic';

const BrowseResource = dynamic(() => import('@/containers/resources/browse'));

const BrowseResourcePage = () => {
  return <BrowseResource />;
};

export default BrowseResourcePage;
