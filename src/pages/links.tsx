import dynamic from 'next/dynamic';
import { RESOURCE_LINKS_URL } from '@/utils/constants';
import { fetchContentFromGitHub } from '@/utils/http-client';
import { rewriteContentPaths } from '@/utils/content';

const ResourceLinks = dynamic(() => import('@/containers/resources/links'));

export async function getStaticProps() {
  const markdownText = await fetchContentFromGitHub(RESOURCE_LINKS_URL);

  const updatedText = rewriteContentPaths(markdownText);

  return {
    props: { content: updatedText },
    revalidate: 60 * 60 * 24, // revalidate daily
  };
}

type Props = {
  content: string;
};

const ResourceLinksPage = ({ content }: Props) => {
  return <ResourceLinks content={content} />;
};

export default ResourceLinksPage;
