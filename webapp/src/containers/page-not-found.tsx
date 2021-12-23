const PageNotFound = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 h-screen flex items-center">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="h-80 md:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?auto=format&q=75&fit=crop&w=600"
              loading="lazy"
              alt="Photo by Theo Crazzolara"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center items-center sm:items-start md:py-24 lg:py-32">
            <p className="text-indigo-500 text-sm md:text-base font-semibold uppercase mb-4">Error 404</p>
            <h1 className="text-gray-800 text-2xl md:text-3xl font-bold text-center sm:text-left mb-2">
              Page not found
            </h1>

            <p className="text-gray-500 md:text-lg text-center sm:text-left mb-4 md:mb-8">
              The page you’re looking for doesn’t exist.
            </p>

            <nav className="flex sm:block gap-4 sm:space-y-1 md:space-y-2">
              <div>
                <a
                  href="/"
                  className="inline-block text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm md:text-base transition duration-100"
                >
                  Home
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="inline-block text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm md:text-base transition duration-100"
                >
                  Search
                </a>
              </div>

              <div>
                <a
                  href="/"
                  className="inline-block text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm md:text-base transition duration-100"
                >
                  Help
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
