import { useEffect } from 'react';
import router from 'next/router';
import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import MainLayout from '@/components/layout/main';
import type { ExtendedAppProps } from '@/types/app';
import AuthGuard from '@/components/auth/auth-guard';
import { GlobalSeo } from '@/components/seo/seo';
import { pageView } from '@/utils/gtag';

import '@/styles/global.css';
import { isNotProduction } from '@/utils/common';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 0, refetchOnWindowFocus: false } } });

const CustomApp = ({ Component, pageProps: { session, ...pageProps } }: ExtendedAppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <GlobalSeo />
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
        {isNotProduction() && <ReactQueryDevtools initialIsOpen />}
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default CustomApp;
