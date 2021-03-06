import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import emoji from 'node-emoji';
import toc from '@jsdevtools/rehype-toc';

import withPublicLayout from '@/components/hof/with-public-layout';

type Props = {
  content: string;
};

const ResourceLinks = ({ content }: Props) => {
  const onEmojiMissing = (name: string) => {
    return name;
  };

  return (
    <div className="py-2">
      <div className="lg:w-2/3 p-6 mb-6 mx-auto lg:mx-0 xl:mx-auto md:w-11/12 xs:w-full" id="resource-links">
        <div className="prose prose:max-w-full prose-h3:flex prose-img:my-0">
          <ReactMarkdown
            rehypePlugins={[
              rehypeRaw,
              rehypeSlug,
              rehypeAutolinkHeadings,
              [rehypeExternalLinks, { target: '_blank' }],
              toc,
            ]}
            remarkPlugins={[remarkGfm]}
          >
            {emoji.emojify(content, onEmojiMissing)}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default withPublicLayout(ResourceLinks, { title: 'Useful links' });
