import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import router from 'next/router';
import Loader from '@/components/common/loader';

type Props = PropsWithChildren<{
  children: ReactNode;
  options?: {
    redirectTo?: string;
  };
}>;

const AuthGuard = ({ children, options }: Props) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    // Do nothing while loading
    if (status === 'loading') {
      return;
    }

    // If not authenticated, redirect to provided url or
    if (!isUser) {
      if (options?.redirectTo) {
        router.push(options.redirectTo);
      } else {
        signIn();
      }
    }
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div className="h-screen w-screen flex flex-col justify-center content-center items-center">
      <Loader scope="page" />
    </div>
  );
};

export default AuthGuard;
