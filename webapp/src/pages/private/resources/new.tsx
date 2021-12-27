import dynamic from 'next/dynamic';

const NewResource = dynamic(() => import('@/containers/private/resources/new'));

const NewResourcePage = () => {
  return <NewResource />;
};

NewResourcePage.auth = {
  redirectTo: '/',
};

export default NewResourcePage;
