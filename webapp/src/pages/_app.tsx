import { AppProps } from 'next/app';
import '@/styles/global.css';
import MainLayout from '@/components/layout/main';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default CustomApp;
