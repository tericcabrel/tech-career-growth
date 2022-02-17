import dynamic from 'next/dynamic';
import { NextPageContext } from 'next';
import { fetchContentFromGitHub } from '@/utils/http-client';

const TheadView = dynamic(() => import('@/containers/threads/view'));

const buildFileURL = (id: string) => {
  return `https://raw.githubusercontent.com/Gear61/Tech-Career-Growth-Learning-Resources-And-Roadmaps/main/threads/${id}`;
};

export async function getStaticProps(context: NextPageContext) {
  // @ts-ignore
  const page: string = context.params.id;
  const markdownText = await fetchContentFromGitHub(buildFileURL(page));

  return {
    props: { content: markdownText, title: page },
    revalidate: 60 * 60 * 24, // revalidate daily
  };
}

export async function getStaticPaths() {
  const threads = [
    'Choosing Your Path In Tech.md',
    'How To Build A Software Project That Looks Good To Employers.md',
    'How To Build Non Front-End Projects.md',
    'Succeeding As A Bootcamper.md',
    'Why A Harder Interview Question Is Good.md',
    'Why Cross Platform Frameworks Struggle.md',
    'Why Imber Failed.md',
    'Why Junior Engineers Are Not Given Chances.md',
    'Why Your Interviewer Is Not Helping You.md',
  ];

  return {
    paths: threads.map((thread) => {
      return {
        params: {
          id: thread,
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

const TheadViewPage = ({ content, title }: Props) => {
  return <TheadView content={content} title={title} />;
};

export default TheadViewPage;
