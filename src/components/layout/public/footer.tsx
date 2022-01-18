import Link from 'next/link';
import LinkedinIcon from '@/components/icons/linkedin';
import GithubIcon from '@/components/icons/github';
import SlackIcon from '@/components/icons/slack';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="mx-auto flex flex-wrap text-gray-800 text-sm p-5 sm:justify-between sm:flex-row sm:h-16 xs:flex-col xs:items-center">
        <div className="xs:pb-5">© Copyright {year} Tech Career Growth.</div>
        <div className="w-40 flex flex-wrap items-center justify-between">
          <Link href="https://github.com/Gear61/Software-Project-Ideas">
            <a className="block w-1/3 text-right" target="_blank" rel="noreferrer nopener" aria-label="Software Ideas">
              <GithubIcon height={26} width={26} />
            </a>
          </Link>
          <Link href="https://join.slack.com/t/techcareergrowth/shared_invite/zt-lt2tbjcn-LOAVIDuGPI~nkuc4woHDLg">
            <a className="bloc w-1/3 text-right" target="_blank" rel="noreferrer nopener" aria-label="Go to Slack">
              <SlackIcon height={24} width={24} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/techcareergrowth">
            <a className="block w-1/3 text-right" target="_blank" rel="noreferrer nopener" aria-label="Go to LinkedIn">
              <LinkedinIcon width={26} height={26} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
