import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ArrowLeftIcon from '@/components/icons/arrow-left';
import MenuIcon from '@/components/icons/menu';
import useBooleanState from '@/hooks/use-boolean-state';
import { useClickOutside } from '@/hooks/use-click-outside';

const Header = () => {
  const ref = useRef<any>();
  const [isMenuOpened, openMenu, closeMenu] = useBooleanState(false);

  useClickOutside(ref, () => closeMenu());

  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto flex sm:py-5 sm:px-4 xs:py-2 xs:px-2 items-center xs:justify-between xs:items-center">
        <div>
          <Link href="/">
            <a className="flex items-center title-font font-medium text-gray-900 sm:mb-4 md:mb-0">
              <Image src="/assets/logo.jpg" width={36} height={36} alt="App Logo" />
              <span className="ml-3 text-xl xs:hidden sm:hidden lg:block">Tech Career Growth</span>
              <span className="ml-3 text-xl lg:hidden">TCG</span>
            </a>
          </Link>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:block">
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
        <div className="xs:hidden">
          <Link href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg">
            <a
              className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-400 rounded"
              target="_blank"
            >
              Join the slack
              <ArrowLeftIcon />
            </a>
          </Link>
        </div>
        <div className="mr-2 flex md:hidden">
          <button
            aria-label="Open menu"
            className="text-gray-800 dark:text-white hover:text-blue-500 inline-flex items-center justify-center p-2 rounded-md"
            onClick={() => openMenu()}
          >
            <MenuIcon width={20} height={20} />
          </button>
        </div>
      </div>
      <div className="sm:hidden absolute left-0 top-[55px] bg-white shadow w-full z-10" ref={ref}>
        {isMenuOpened && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a className="text-gray-800 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
            </Link>
            <Link href="/resources">
              <a className="text-gray-800 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">
                Find resources
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-800 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium">
                About Alex & Rahul
              </a>
            </Link>
            <Link href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg">
              <a
                className="text-gray-800 hover:text-green-300 block px-3 py-2 rounded-md text-base font-medium"
                target="_blank"
              >
                Join the slack
              </a>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
