import Link from 'next/link';
import Image from 'next/image';

const MobileLink = () => {
  return (
    <div className="bg-slate-100 overflow-hidden relative my-20 xs:my-0">
      <h4 className="text-center text-2xl mt-4">Keep growing your tech career everywhere</h4>
      <div className="py-4 flex justify-center items-center">
        <Link href="https://apps.apple.com/app/id1605094641">
          <a target="_blank">
            <Image src="/assets/appstore.webp" width={180} height={60} alt="App store picture" />
          </a>
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.randomappsinc.techcareergrowth">
          <a target="_blank">
            <Image src="/assets/playstore.webp" width={200} height={87} alt="Play store picture" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileLink;
