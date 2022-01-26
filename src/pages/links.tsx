import dynamic from 'next/dynamic';
import matter from 'gray-matter';
import axios from 'axios';
import markdownToHtml from '@/utils/markdownToHTML';
import { RESOURCE_LINKS_URL } from '@/utils/constants';

const ResourceLinks = dynamic(() => import('@/containers/resources/links'));

const fetchContentFromGitHub = async (url: string): Promise<string> => {
  const response = await axios.get<string>(url).catch(() => ({ data: '## No content for the moment.' }));

  return response.data;
};

export async function getStaticProps() {
  const markdownText = await fetchContentFromGitHub(RESOURCE_LINKS_URL);
  /*const { content } = matter(markdownText);

  const htmlContent: string = await markdownToHtml(content || '');*/

  return {
    props: { content: markdownText },
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
