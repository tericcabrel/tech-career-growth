import dynamic from 'next/dynamic';
import { GetServerSidePropsContext } from 'next';
import { getCsrfToken, getProviders, getSession } from 'next-auth/react';
import { filter } from 'lodash';

type Props = {
  csrfToken?: string;
};

const Login = dynamic(() => import('@/containers/auth/login'));

const LoginPage = ({ csrfToken }: Props) => {
  return <Login csrfToken={csrfToken} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return { redirect: { permanent: false, destination: '/private/dashboard' } };
  }

  const csrfToken = await getCsrfToken({ req: context.req });
  const providers = filter(await getProviders(), (provider) => {
    return provider.type !== 'credentials';
  });

  return {
    props: { csrfToken, providers },
  };
}

export default LoginPage;
