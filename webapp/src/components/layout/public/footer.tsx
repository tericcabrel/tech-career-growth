import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row text-gray-800 text-sm h-16">
        <div>© Copyright 2021. Tech Career Growth Community.</div>
        <div className="w-1/5 flex flex-wrap items-center justify-end">
          <Link href="https://github.com">
            <a
              className="block w-1/3 text-right"
              target="_blank"
              rel="noreferrer nopener"
              aria-label="View GitHub organization"
            >
              {/*<GithubIcon height={28} width={28} />*/}
              GitHub
            </a>
          </Link>
          <Link href="https://twitter.com">
            <a className="bloc w-1/3 text-right" target="_blank" rel="noreferrer nopener" aria-label="Go to Twitter">
              {/*<TwitterIcon height={24} width={24} />*/}
              Twitter
            </a>
          </Link>
          <Link href="https://linkedin.com/">
            <a
              className="block w-1/3 text-right"
              target="_blank"
              rel="noreferrer nopener"
              aria-label="Go to the website"
            >
              {/*<GlobeAltIcon width={30} height={30} />*/}
              Website
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
