import Link from 'next/link';
import Image from 'next/image';
import withPublicLayout from '@/components/hof/with-public-layout';
import LinkedinIcon from '@/components/icons/linkedin';
import TwitterIcon from '@/components/icons/twitter';
import YoutubeIcon from '@/components/icons/youtube';
import GithubIcon from '@/components/icons/github';
import GoogleplayIcon from '@/components/icons/googleplay';

const About = () => {
  return (
    <div className="py-2">
      <div className="xl:w-2/3 lg:w-3/4 sm:w-11/12 p-6 mx-auto xs:w-full">
        <h1 className="text-4xl font-bold">About Us</h1>

        <p className="text-justify my-8">
          Hello! We are Alex Chiou and Rahul Pandey, 2 Silicon Valley tech leads who are looking to give back and are
          now working full-time teaching and growing other people in tech. Alex was a tech lead at Robinhood and
          Facebook, working at other multi-billion dollar companies like Course Hero and PayPal before that. He has also
          built apps for fun that have gotten over 2.5 million installs. Rahul was a tech lead at Facebook and was
          previously at Pinterest. Rahul also runs a YouTube channel about software engineering that has 27,000+
          subscribers.
        </p>
        <p className="text-justify mb-8">
          We have created this tightly-knit, open community to help everyone accelerate their career in tech, no matter
          what their background is. The main thing we do is host free open, honest, and interactive sessions regularly
          to give you the career growth advice that you can&apos;t easily find online. We want to take the massive
          amount of resources and learnings from Silicon Valley and make them free and readily accessible for everybody.
          Our mission is to lower barriers in tech for all.
        </p>
        <div className="text-justify mb-8">
          If you want to stay connected with us, you can join us at the following channels:
          <br />
          <br />
          <ul className="space-y-2">
            <li>
              <b>LinkedIn: </b>
              <Link href="https://www.linkedin.com/company/techcareergrowth">
                <a target="_blank" className="text-green-500 underline overflow-ellipsis">
                  https://www.linkedin.com/company/techcareergrowth
                </a>
              </Link>
            </li>
            <li>
              <b>Slack: </b>
              <Link href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg">
                <a target="_blank" className="text-green-500 underline">
                  https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg
                </a>
              </Link>
            </li>
            <li>
              <b>Mailing list: </b>
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
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-8 gap-6 xs:grid-cols-1">
              <div className="col-start-1 col-span-4 flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
                <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                  <Image
                    src="/assets/alex.jpg"
                    loading="lazy"
                    alt="Picture of Alex Chiou"
                    className="w-full h-full object-cover object-center"
                    width={128}
                    height={128}
                  />
                </div>

                <div>
                  <div className="text-green-500 md:text-lg font-bold text-center">Alex Chiou</div>
                  <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                    Android Engineer at Robinhood
                  </p>
                  <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                    Ex-Meta tech lead at Instagram and Portal. Side project enthusiast who has built apps with 2
                    million+ downloads combined.
                  </p>
                  <div className="flex justify-center">
                    <div className="flex ">
                      <Link href="https://www.linkedin.com/in/alexander-chiou/">
                        <a target="_blank">
                          <LinkedinIcon width={20} height={20} />
                        </a>
                      </Link>

                      <Link href="https://github.com/Gear61">
                        <a target="_blank" className="mx-4">
                          <GithubIcon width={20} height={20} />
                        </a>
                      </Link>

                      <Link href="https://play.google.com/store/apps/dev?id=9093438553713389916">
                        <a target="_blank">
                          <GoogleplayIcon width={20} height={20} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 flex flex-col items-center bg-gray-100 rounded-lg p-4 lg:p-8">
                <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mb-2 md:mb-4">
                  <Image
                    src="/assets/rahul.jpg"
                    loading="lazy"
                    alt="Picture of Rahul Pandey"
                    className="w-full h-full object-cover object-center"
                    width={128}
                    height={128}
                  />
                </div>

                <div>
                  <div className="text-green-500 md:text-lg font-bold text-center">Rahul Pandey</div>
                  <p className="text-gray-500 text-sm md:text-base text-center mb-3 md:mb-4">
                    Android Engineer at Meta
                  </p>
                  <p className="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                    Stanford lecturer, and YouTuber with a passion for tech career growth. His YouTube channel has more
                    than 25,000 subscribers.
                  </p>

                  <div className="flex justify-center">
                    <div className="flex">
                      <Link href="https://www.linkedin.com/in/rpandey1234/">
                        <a target="_blank">
                          <LinkedinIcon width={20} height={20} />
                        </a>
                      </Link>

                      <Link href="https://twitter.com/rpandey1234">
                        <a target="_blank" className="mx-4">
                          <TwitterIcon width={22} height={22} />
                        </a>
                      </Link>

                      <Link href="https://www.youtube.com/rpandey1234">
                        <a target="_blank">
                          <YoutubeIcon width={24} height={24} />
                        </a>
                      </Link>
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
