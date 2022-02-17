import { ComponentType } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useHotkeys } from 'react-hotkeys-hook';
import PublicLayout from '@/components/layout/public/layout';

type Props = {
  title: string;
  path?: string;
};

function withPublicLayout<T>(WrappedComponent: ComponentType<T>, props: Props) {
  // eslint-disable-next-line react/display-name
  return (wrappedComponentProps: T) => {
    const router = useRouter();

    useHotkeys('ctrl+l', () => {
      router.push('/login');
    });
    // eslint-disable-next-line react/prop-types
    const { title } = props;

    return (
      <PublicLayout>
        <Head>
          <title>{title} | Tech Career Growth</title>
        </Head>
        <div className="min-h-[calc(100vh-144px)]">
          <WrappedComponent {...wrappedComponentProps} />
        </div>
      </PublicLayout>
    );
  };
}

export default withPublicLayout;
