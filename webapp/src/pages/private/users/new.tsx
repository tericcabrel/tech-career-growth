import dynamic from 'next/dynamic';

const UserNew = dynamic(() => import('@/containers/private/users/new'));

const NewUserPage = () => {
  return <UserNew />;
};

NewUserPage.auth = {
  redirectTo: '/',
};

export default NewUserPage;
