import { Fragment, PropsWithChildren } from 'react';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

const MainLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Fragment>
      <Head>
        <title>Tech Career Growth Navigator</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Find the right resource to be a better developer and grow your career" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="main">{children}</div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default MainLayout;
