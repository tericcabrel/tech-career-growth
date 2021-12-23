import Link from 'next/link';
import Image from 'next/image';

const PageNotFound = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 h-screen flex items-center">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex items-center overflow-hidden">
            <Image src="/assets/not-found.jpg" loading="lazy" alt="Photo by CHUTTERSNAP" width={640} height={420} />
          </div>

          <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
            <p className="text-green-500 text-sm md:text-base font-semibold uppercase mb-4">Error 404</p>
            <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
              Page not found
            </h1>

            <p className="text-gray-500 md:text-lg text-center sm:text-left mb-4 md:mb-8">
              The page you’re looking for doesn’t exist.
            </p>

            <nav className="flex sm:block gap-4 sm:space-y-1 md:space-y-2">
              <div>
                <Link href="/">
                  <a className="inline-block text-green-500 hover:text-green-600 active:text-green-700 text-sm md:text-base transition duration-100">
                    Home
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/resources">
                  <a className="inline-block text-green-500 hover:text-green-600 active:text-green-700 text-sm md:text-base transition duration-100">
                    Browse resources
                  </a>
                </Link>
              </div>

              <div>
                <Link href="/resources/request">
                  <a className="inline-block text-green-500 hover:text-green-600 active:text-green-700 text-sm md:text-base transition duration-100">
                    Request resource
                  </a>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
