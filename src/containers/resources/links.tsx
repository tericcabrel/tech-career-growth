import parse from 'html-react-parser';

import withPublicLayout from '@/components/hof/with-public-layout';

type Props = {
  content: string;
};

const ResourceLinks = ({ content }: Props) => {
  return (
    <div className="py-2">
      <div className="w-2/3 p-6 mx-auto xs:w-full">
        <h1 className="text-4xl font-bold">Useful Links</h1>
        <div>{parse(content)}</div>
      </div>
    </div>
  );
};

export default withPublicLayout(ResourceLinks, { title: 'Useful links' });
