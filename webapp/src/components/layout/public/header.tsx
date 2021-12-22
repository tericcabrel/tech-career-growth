import Image from 'next/image';

const PublicHeader = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="border border-green-400 h-10 w-10 flex justify-center items-center rounded">
            <Image src="/assets/logo.jpg" width={36} height={36} alt="App Logo" />
          </div>
          <span className="ml-3 text-xl">Tech Career</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Browse resources</a>
          <a className="mr-5 hover:text-gray-900">Ask resource</a>
        </nav>
        <button className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded">
          Join us
        </button>
      </div>
    </header>
  );
};

export default PublicHeader;
