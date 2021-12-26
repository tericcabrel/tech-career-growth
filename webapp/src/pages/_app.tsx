import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainLayout from '@/components/layout/main';
import type { ExtendedAppProps } from '@/types/app';
import AuthGuard from '@/components/auth/auth-guard';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/global.css';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0 } } });

const CustomApp = ({ Component, pageProps: { session, ...pageProps } }: ExtendedAppProps) => {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <QueryClientProvider client={queryClient}>
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
        {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen />}
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default CustomApp;
