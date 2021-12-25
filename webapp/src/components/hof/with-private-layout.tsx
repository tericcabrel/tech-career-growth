import { ComponentType } from 'react';
import Head from 'next/head';

import Layout from '@/components/layout/private/layout';

type Props = {
  title: string;
};

function withPrivateLayout<T>(WrappedComponent: ComponentType<T>, props: Props) {
  // eslint-disable-next-line react/display-name
  return (wrappedComponentProps: T) => {
    // eslint-disable-next-line react/prop-types
    const { title } = props;

    return (
      <Layout>
        <Head>
          <title>{title} | Tech Career Growth Navigator</title>
        </Head>
        <WrappedComponent {...wrappedComponentProps} />
      </Layout>
    );
  };
}

export { withPrivateLayout };
