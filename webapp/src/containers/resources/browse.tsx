import withPublicLayout from '@/components/hof/with-public-layout';

const BrowseResource = () => {
  return (
    <div className="py-5">
      <h1 className="text-4xl font-bold">Browse resources</h1>
    </div>
  );
};

export default withPublicLayout(BrowseResource, { title: 'Browse resources' });
