import withPublicLayout from '@/components/hof/with-public-layout';
import StepSection from '@/components/home/step-section';
import CallToAction from '@/components/home/call-to-action';
import Hero from '@/components/home/hero';
import MobileLink from '@/components/home/mobile-link';

const Home = () => {
  return (
    <div className="xs:px-2">
      <Hero />
      <StepSection />
      <CallToAction />
      <MobileLink />
    </div>
  );
};

export default withPublicLayout(Home, { title: 'Home' });
