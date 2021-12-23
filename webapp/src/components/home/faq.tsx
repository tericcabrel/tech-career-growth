import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'Is lunch provided free of cost ?',
    answer:
      'Yes, it is, if you have a membership with us. Otherwise it is charged as per the menu. Some limits do apply as to how much items can be included in your lunch. This limit is enough for any one person and merely exists to discourage abusal of the system.',
  },
  {
    question: 'Do you have 2 Bedroom suites ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Are Wi-Fi costs included in the price ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    question: 'Where can I reach you for support ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const subheading = 'FAQS';
const heading = 'You have Questions ?';
const description = 'And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur';

const Faq = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);

  const toggleQuestion = (questionIndex: number | null) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <div>
      <div className="py-20 lg:py-24">
        <div className="flex flex-col items-center">
          <div>
            {/*<h5 className="font-bold text-primary-500 mb-4 text-center">{subheading}</h5>
            <h2 className="w-full text-4xl sm:text-5xl font-black tracking-wide text-center">{heading}</h2>
            <p className="w-full text-center mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-xl">
              {description}
            </p>*/}
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">{heading}</h2>

            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">{description}</p>
          </div>
          <dl className="mt-12 max-w-4xl relative">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300"
              >
                <dt className="flex justify-between items-center">
                  <span className="text-lg lg:text-xl font-semibold">{faq.question}</span>
                  <motion.span
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="ml-2 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-down w-6 h-6"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.span>
                </dt>
                <motion.dd
                  variants={{
                    open: { opacity: 1, height: 'auto', marginTop: '16px' },
                    collapsed: { opacity: 0, height: 0, marginTop: '0px' },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? 'open' : 'collapsed'}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="pointer-events-none text-sm sm:text-base leading-relaxed"
                >
                  {faq.answer}
                </motion.dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
