import dynamic from 'next/dynamic';

const Users = dynamic(() => import('@/containers/private/users'));

const UsersPage = () => {
  return <Users />;
};

UsersPage.auth = {
  redirectTo: '/',
};

export default UsersPage;
