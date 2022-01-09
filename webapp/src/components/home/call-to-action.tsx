import Link from 'next/link';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <div className="flex bg-white overflow-hidden relative my-20 xs:my-0 md:flex-col-reverse md:items-center lg:flex-row">
      <div className="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 xs:w-full md:w-full lg:w-1/2">
        <h2 className="font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block text-3xl ">Want to advance your career in tech?</span>
          <span className="block text-2xl text-green-500">It&#x27;s never too late.</span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
          We are a community of 10,000+ people in tech working together to learn, share and improve our skills to have
          more impact in the tech industry.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow xs:w-full">
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
      <div className="xs:hidden">
        <Image
          src="/assets/join-illustration.svg"
          className="absolute max-w-1/2 lg:block right-0 top-0 xs:hidden"
          width={529}
          height={400}
        />
      </div>
    </div>
  );
};

export default CallToAction;
