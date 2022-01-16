import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto xs:py-10 sm:py-20 md:py-24 lg:px-4 xs:mx-4">
      <div className="relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left">
        <h1 className="font-bold xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight">
          Find the right resource to <span className="text-green-500">grow your career in tech</span>
        </h1>
        <p className="my-5 lg:my-8 xl:text-lg xs:my-8">
          This database only holds official resources from Tech Career Growth (TCG), a 100% free online learning
          community.
          <br />
          <br />
          TCG is run by Alex Chiou and Rahul Pandey, 2 Silicon Valley tech leads who have 15+ years of experience
          combined, spending many of those years working at top tech companies like Pinterest, Facebook, and Robinhood.
        </p>
        <div className="flex justify-center relative text-center mx-auto">
          <div className="w-20 h-20 rounded-full overflow-hidden mr-4">
            <Image
              src="/assets/alex.jpg"
              loading="lazy"
              alt="Picture of Alex Chiou"
              className="w-full h-full object-cover object-center"
              width={128}
              height={128}
            />
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden ml-4">
            <Image
              src="/assets/rahul.jpg"
              loading="lazy"
              alt="Picture of Rahul Pandey"
              className="w-full h-full object-cover object-center"
              width={128}
              height={128}
            />
          </div>
        </div>
      </div>
      <div className="relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end py-20 xs:hidden">
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
