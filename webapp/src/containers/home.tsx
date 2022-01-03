import withPublicLayout from '@/components/hof/with-public-layout';
import StepSection from '@/components/home/step-section';
import CallToAction from '@/components/home/call-to-action';
import Hero from '@/components/home/hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <StepSection />
      <CallToAction />
    </div>
  );
};

export default withPublicLayout(Home, { title: 'Home' });
