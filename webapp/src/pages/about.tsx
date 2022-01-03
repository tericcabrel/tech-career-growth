import dynamic from 'next/dynamic';

const About = dynamic(() => import('@/containers/about'));

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
