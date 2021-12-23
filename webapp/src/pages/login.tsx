import dynamic from 'next/dynamic';

const Login = dynamic(() => import('@/containers/auth/login'));

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
