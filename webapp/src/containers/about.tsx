import Link from 'next/link';
import withPublicLayout from '@/components/hof/with-public-layout';

const About = () => {
  return (
    <div className="py-2">
      <div className="w-2/3 p-6 mx-auto">
        <h1 className="text-4xl font-bold">About Us</h1>

        <p className="text-justify my-8">
          Hello! We are Alex Chiou and Rahul Pandey, 2 Silicon Valley tech leads who are looking to give back. Alex is a
          currently an Android engineer at Robinhood and an ex-Facebook tech lead. He has also built apps for fun that
          have gotten over 2 million installs. Rahul is a tech lead at Facebook who was previously at Pinterest. Rahul
          also rims a YouTube channel about software engineering that has 15,000, subscribers.
        </p>
        <p className="text-justify mb-8">
          We have created this tightly-knit, open community to help everyone accelerate their career in tech, no matter
          what their background is. The main thing we do is host free open, honest, and interactive sessions regularly
          to give you the career growth advice that you can&apos;t easily find online. We want to take the massive
          amount of resources and !earnings from Silicon Valley and make them free and readily accessible for everybody.
          Our mission is to lower barriers in tech for all.
        </p>
        <div className="text-justify mb-8">
          If you want to stay connected with us, you can join us at the following channels:
          <br />
          <br />
          <ul>
            <li>
              <b>Mailing list: </b>
              <Link href="https://learn.rkpandey.com">
                <a target="_blank" className="text-green-500 underline">
                  https://learn.rkpandey.com
                </a>
              </Link>
            </li>
            <li>
              <b>Slack: </b>
              <Link href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-It2tbjcn-LOAVINGPI-nkuc4woHDLg">
                <a target="_blank" className="text-green-500 underline">
                  https://join.slack.com/t/techcareergrowth/shared_invite/zt-It2tbjcn-LOAVINGPI-nkuc4woHDLg
                </a>
              </Link>
            </li>
            <li>
              <b>Email list: </b>
              <Link href="https://learn.rkpandey.com">
                <a target="_blank" className="text-green-500 underline">
                  https://learn.rkpandey.com
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-justify mb-8">
          On top of the sessions, Slack is where Alex and Rahul can provide you the most help. On top of answering your
          questions, you can also get your resume reviewed, find job postings, and much more! So if you use Slack (or
          are willing to try it out), please join us on Slack!
        </p>
        <p className="text-justify mb-8">
          If the Slack link doesn&apos;t work, just send Alex or Rahul a Linkedln message with your email and we will
          personally send you a Slack invite ourselves!
        </p>
        <div className="bg-white mt-10 pb-20">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            <div className="grid grid-cols-8 gap-6">
              <div className="col-start-1 col-span-4 flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
                <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Ayo Ogunseinde"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-green-500 md:text-lg font-bold text-center">Greg Jackson</div>
                  <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">CTO</p>
                  <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                    Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy.
                  </p>
                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="/"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      >
                        <svg
                          className="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>

                      <a
                        href="/"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      >
                        <svg
                          className="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
                <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                    loading="lazy"
                    alt="Photo by Midas Hofstra"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-green-500 md:text-lg font-bold text-center">Robert Greyson</div>
                  <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">Creative Director</p>
                  <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                    Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                  </p>

                  <div className="flex justify-center">
                    <div className="flex gap-4">
                      <a
                        href="/"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      >
                        <svg
                          className="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>

                      <a
                        href="/"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      >
                        <svg
                          className="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPublicLayout(About, { title: 'About us' });
