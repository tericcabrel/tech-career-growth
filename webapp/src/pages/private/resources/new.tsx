import dynamic from 'next/dynamic';

const NewDataLoaderResource = dynamic(() => import('@/containers/private/resources/new/data-loader'));

const NewResourcePage = () => {
  return <NewDataLoaderResource />;
};

NewResourcePage.auth = {
  redirectTo: '/',
};

export default NewResourcePage;
