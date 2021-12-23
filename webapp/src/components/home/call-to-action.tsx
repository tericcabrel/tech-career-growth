const CallToAction = () => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden relative mb-20">
      <div className="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block text-3xl ">Want to be a better developer?</span>
          <span className="block text-2xl text-green-500">It&#x27;s never too late.</span>
        </h2>
        <p className="text-xl mt-4 text-gray-400">
          We are a community of more than 10000 developers who the learn, share, and improve their skills to have more
          impact in the tech industry.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
            <button
              type="button"
              className="py-4 px-6 bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Join the community
            </button>
          </div>
        </div>
      </div>
      <img src="/assets/join-illustration.svg" className="absolute h-full max-w-1/2 hidden lg:block right-0 top-0" />
    </div>
  );
};

export default CallToAction;
