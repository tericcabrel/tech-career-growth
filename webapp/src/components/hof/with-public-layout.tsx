import { ComponentType } from 'react';
import Head from 'next/head';
import PublicLayout from '@/components/layout/public/layout';

type Props = {
  title: string;
  path?: string;
};

function withPublicLayout<T>(WrappedComponent: ComponentType<T>, props: Props) {
  // eslint-disable-next-line react/display-name
  return (wrappedComponentProps: T) => {
    // eslint-disable-next-line react/prop-types
    const { title } = props;

    return (
      <PublicLayout>
        <Head>
          <title>{title} | Tech Career Growth</title>
        </Head>
        <WrappedComponent {...wrappedComponentProps} />
      </PublicLayout>
    );
  };
}

export default withPublicLayout;
