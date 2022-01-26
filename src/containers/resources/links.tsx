import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

import withPublicLayout from '@/components/hof/with-public-layout';

type Props = {
  content: string;
};

const ResourceLinks = ({ content }: Props) => {
  return (
    <div className="py-2">
      <div className="w-2/3 p-6 mx-auto xs:w-full">
        <div
          className="prose
          prose-h3:flex prose-a:flex prose-a:items-center prose-img:my-0
          "
        >
          <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]} remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default withPublicLayout(ResourceLinks, { title: 'Useful links' });
