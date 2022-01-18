import dynamic from 'next/dynamic';

const UserNew = dynamic(() => import('@/containers/private/users/new/data-loader'));

const NewUserPage = () => {
  return <UserNew />;
};

NewUserPage.auth = {
  redirectTo: '/',
};

export default NewUserPage;
