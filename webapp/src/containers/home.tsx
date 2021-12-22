import Head from 'next/head';
import Image from 'next/image';
import { withPublicLayout } from '@/components/hof/with-public-layout';

const Home = () => {
  return (
    <div className="container p-8">
      <Head>
        <title>Tech Career Growth Navigator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Tech Career Growth Navigator</h1>
      </main>

      <footer>
        <span>
          <Image src="/assets/logo.jpg" alt="App Logo" width={72} height={72} />
        </span>
      </footer>
    </div>
  );
};

export default withPublicLayout(Home, { title: 'Home' });
