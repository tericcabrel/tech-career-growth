const FeaturedCategories = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Our featured categories
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            The resources are grouped by category to make it easier and accurate to find the best resources for your
            needs. Here are the categories we think you might be interested in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Improving my resume</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <a
              href="/"
              className="text-green-500 hover:text-green-600 active:text-green-700 font-bold transition duration-100 mt-auto"
            >
              Browse
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Interviewing</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <a
              href="/"
              className="text-green-500 hover:text-green-600 active:text-green-700 font-bold transition duration-100 mt-auto"
            >
              Browse
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Moving up the career ladder</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <a
              href="/"
              className="text-green-500 hover:text-green-600 active:text-green-700 font-bold transition duration-100 mt-auto"
            >
              Browse
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Productivity</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <a
              href="/"
              className="text-green-500 hover:text-green-600 active:text-green-700 font-bold transition duration-100 mt-auto"
            >
              Browse
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Building projects</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <a
              href="/"
              className="text-green-500 hover:text-green-600 active:text-green-700 font-bold transition duration-100 mt-auto"
            >
              Browse
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">General growth and learning</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very similar to real text.
            </p>
            <a
              href="/"
              className="text-green-500 hover:text-green-600 active:text-green-700 font-bold transition duration-100 mt-auto"
            >
              Browse
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
