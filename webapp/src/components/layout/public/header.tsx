import Link from 'next/link';
import Image from 'next/image';
import ArrowLeftIcon from '@/components/icons/arrow-left';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <div className="border border-green-400 h-10 w-10 flex justify-center items-center rounded">
              <Image src="/assets/logo.jpg" width={36} height={36} alt="App Logo" />
            </div>
            <span className="ml-3 text-xl">Tech Career Growth Navigator</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/resources">
            <a className="mr-10 hover:text-gray-900 tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-green-500 hover:text-green-500">
              Find resources
            </a>
          </Link>
          <Link href="/about">
            <a className="mr-5 hover:text-gray-900 tracking-wide transition duration-300 pb-1 border-b-2 border-transparent hover:border-green-500 hover:text-green-500">
              About Alex & Rahul
            </a>
          </Link>
        </nav>
        <Link href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg">
          <a
            className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded"
            target="_blank"
          >
            Join the community
            <ArrowLeftIcon />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
