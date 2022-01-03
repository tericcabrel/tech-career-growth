import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24">
      <div className="relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left">
        <h1 className="font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight">
          Find the right resource to <span className="text-green-500">grow your career.</span>
        </h1>
        <p className="my-5 lg:my-8 text-base xl:text-lg">
          You want to improve your resume? Be better at interviewing? Find how to build high quality projects? Our
          database of resources curated by established engineers is there for you.
        </p>
        <div className="relative max-w-md text-center mx-auto lg:mx-0">
          <Link href="/resources">
            <a className="bg-green-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300">
              Get started
            </a>
          </Link>
        </div>
      </div>
      <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end">
        <div className="flex justify-center lg:justify-end items-center">
          <img
            className="min-w-0 w-full max-w-lg xl:max-w-3xl"
            src="/assets/hero-illustration.svg"
            alt="Design Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
