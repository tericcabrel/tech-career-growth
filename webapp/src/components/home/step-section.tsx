import Image from 'next/image';

const steps = [
  {
    heading: 'Browse',
    description: 'Browse the resources, apply filter to find the most accurate results.',
  },
  {
    heading: 'Request',
    description: "If you don't find a resource that suits your needs, you can submit a request to the team.",
  },
  {
    heading: 'Verify',
    description: 'Check out the website from time to time to see if your requested resource is available.',
  },
];

const StepSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pb-10 md:pb-12 items-center">
        <div className="w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12 flex-shrink-0 relative xs:hidden">
          <Image
            src="/assets/step-illustration.svg"
            className="border rounded shadow"
            width={640}
            height={365}
            alt="Step picture"
          />
        </div>
        <div className={'md:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last'}>
          <div className="lg:py-8 text-center md:text-left">
            <h2 className="text-4xl tracking-wide text-center mt-4 text-left font-black text-center md:text-left leading-tight">
              How does this website work?
            </h2>
            <ul className="mt-12">
              {steps.map((step, index) => (
                <li key={index} className="mt-8 flex flex-col md:flex-row items-center md:items-start">
                  <div className="font-semibold text-4xl leading-none text-gray-400">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                  <div className="mt-3 md:mt-0 md:ml-6">
                    <h6 className="leading-none text-xl font-semibold">{step.heading}</h6>
                    <p className="mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
