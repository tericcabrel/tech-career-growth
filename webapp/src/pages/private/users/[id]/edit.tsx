import dynamic from 'next/dynamic';

const UpdateUserDataLoader = dynamic(() => import('@/containers/private/users/update/data-loader'));

const UpdateUserPage = () => {
  return <UpdateUserDataLoader />;
};

UpdateUserPage.auth = {
  redirectTo: '/',
};

export default UpdateUserPage;
