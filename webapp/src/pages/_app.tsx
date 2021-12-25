import { SessionProvider } from 'next-auth/react';
import '@/styles/global.css';
import MainLayout from '@/components/layout/main';
import type { ExtendedAppProps } from '@/types/app';
import AuthGuard from '@/components/auth/auth-guard';

const CustomApp = ({ Component, pageProps: { session, ...pageProps } }: ExtendedAppProps) => {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <MainLayout>
        {Component.auth ? (
          <>
            {/* @ts-ignore */}
            <AuthGuard options={Component.auth}>
              <Component {...pageProps} />
            </AuthGuard>
          </>
        ) : (
          <Component {...pageProps} />
        )}
      </MainLayout>
    </SessionProvider>
  );
};

export default CustomApp;
