import dynamic from 'next/dynamic';

const UpdateResourceDataLoader = dynamic(() => import('@/containers/private/resources/update/data-loader'));

const UpdateResourcePage = () => {
  return <UpdateResourceDataLoader />;
};

UpdateResourcePage.auth = {
  redirectTo: '/',
};

export default UpdateResourcePage;
