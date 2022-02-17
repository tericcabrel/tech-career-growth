import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import emoji from 'node-emoji';

import withPublicLayout from '@/components/hof/with-public-layout';
import Head from 'next/head';

type Props = {
  content: string;
  title: string;
};

const ThreadView = ({ content, title }: Props) => {
  const onEmojiMissing = (name: string) => {
    return name;
  };

  return (
    <div className="py-2">
      <Head>
        <title>{title} | Tech Career Growth</title>
      </Head>
      <div className="w-2/3 p-6 mb-6 mx-auto xs:w-full" id="resource-links">
        <div className="prose prose:max-w-full prose-h3:flex prose-img:my-0">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings, [rehypeExternalLinks, { target: '_blank' }]]}
            remarkPlugins={[remarkGfm]}
          >
            {emoji.emojify(content, onEmojiMissing)}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default withPublicLayout(ThreadView, { title: 'View a thread' });
