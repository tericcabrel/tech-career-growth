import Link from 'next/link';

const CallToAction = () => {
  return (
    <div className="bg-white overflow-hidden relative my-20">
      <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block text-3xl ">Want to advance your career in tech?</span>
          <span className="block text-2xl text-green-500">It&#x27;s never too late.</span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
          We are a community of 10,000+ people in tech working together to learn, share and improve our skills to have
          more impact in the tech industry.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <Link href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg">
              <a
                className="py-4 px-6 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                target="_blank"
              >
                Join the community
              </a>
            </Link>
          </div>
        </div>
      </div>
      <img src="/assets/join-illustration.svg" className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" />
    </div>
  );
};

export default CallToAction;
