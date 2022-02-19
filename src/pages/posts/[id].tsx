import dynamic from 'next/dynamic';
import { NextPageContext } from 'next';
import { fetchContentFromGitHub } from '@/utils/http-client';
import { pathTitleMaps } from '@/utils/content';
import { MARKDOWN_CONTENT_FALLBACK } from '@/utils/constants';
import { capitalize } from '@/utils/common';

const PostView = dynamic(() => import('@/containers/posts/view'));

const buildFileURL = (id: string) => {
  return `https://raw.githubusercontent.com/Gear61/Tech-Career-Growth-Learning-Resources-And-Roadmaps/main/${id}`;
};

export async function getStaticProps(context: NextPageContext) {
  // @ts-ignore
  const page: string = context.params.id;
  const pathTitleMap = pathTitleMaps.find((pathTitleMap) => pathTitleMap.pathInApp === page);

  if (!pathTitleMap) {
    return {
      props: { content: MARKDOWN_CONTENT_FALLBACK, title: page },
    };
  }

  const markdownText = await fetchContentFromGitHub(buildFileURL(pathTitleMap.pathInMarkdown));

  return {
    props: { content: markdownText, title: capitalize(pathTitleMap.title) },
    revalidate: 60 * 60 * 24, // revalidate daily
  };
}

export async function getStaticPaths() {
  return {
    paths: pathTitleMaps.map((pathTitleMap) => {
      return {
        params: {
          id: pathTitleMap.pathInApp,
        },
      };
    }),
    fallback: false,
  };
}

type Props = {
  content: string;
  title: string;
};

const PostViewPage = ({ content, title }: Props) => {
  return <PostView content={content} title={title} />;
};

export default PostViewPage;
