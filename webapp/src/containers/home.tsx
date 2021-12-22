import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
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

export default Home;
