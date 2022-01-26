import parse, { attributesToProps, domToReact } from 'html-react-parser';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

import withPublicLayout from '@/components/hof/with-public-layout';

type Props = {
  content: string;
};

const options = {
  replace: (domNode: any) => {
    if (domNode.attribs && domNode.name === 'a') {
      const props = attributesToProps(domNode.attribs);

      return (
        <a {...props} target="_blank">
          {domToReact(domNode.children, options)}
        </a>
      );
    }
  },
};

const ResourceLinks = ({ content }: Props) => {
  return (
    <div className="py-2">
      <div className="w-2/3 p-6 mx-auto xs:w-full">
        {/*<div className="prose">{parse(content, options)}</div>*/}
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
          remarkPlugins={[remarkGfm]}
          className="prose

          prose-h3:flex prose-a:flex prose-a:items-center prose-img:my-0

          "
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default withPublicLayout(ResourceLinks, { title: 'Useful links' });
