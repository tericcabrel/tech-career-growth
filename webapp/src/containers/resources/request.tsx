import withPublicLayout from '@/components/hof/with-public-layout';

const RequestResource = () => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold">Request a resource</h1>
    </div>
  );
};

export default withPublicLayout(RequestResource, { title: 'Request a resource' });
