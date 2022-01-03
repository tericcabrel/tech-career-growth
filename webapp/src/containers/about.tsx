import withPublicLayout from '@/components/hof/with-public-layout';

const About = () => {
  return (
    <div className="py-2">
      <div className="w-2/3 p-6 mx-auto">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>
    </div>
  );
};

export default withPublicLayout(About, { title: 'About us' });
