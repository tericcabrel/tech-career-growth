type PathTitleMap = {
  pathInMarkdown: string;
  pathInApp: string;
  title: string;
};

export const pathTitleMaps: PathTitleMap[] = [
  {
    pathInApp: 'sessions-recaps-2021',
    title: 'Sessions Recap 2021',
    pathInMarkdown: 'Sessions%20Recaps%20History.md',
  },
  {
    pathInApp: 'choosing-path-in-tech',
    title: 'Choosing Your Path In Tech',
    pathInMarkdown: 'threads/Choosing%20Your%20Path%20In%20Tech.md',
  },
  {
    pathInApp: 'how-to-build-software-projects',
    title: 'How To Build A Software Project That Looks Good To Employers',
    pathInMarkdown: 'threads/How%20To%20Build%20A%20Software%20Project%20That%20Looks%20Good%20To%20Employers.md',
  },
  {
    pathInApp: 'how-to-build-non-frontend-projects',
    title: 'How To Build Non Front-End Projects',
    pathInMarkdown: 'threads/How%20To%20Build%20Non%20Front-End%20Projects.md',
  },
  {
    pathInApp: 'succeeding-as-a-bootcamper',
    title: 'Succeeding As A Bootcamper',
    pathInMarkdown: 'threads/Succeeding%20As%20A%20Bootcamper.md',
  },
  {
    pathInApp: 'why-harder-interview-questions-good',
    title: 'Why A Harder Interview Question Is Good',
    pathInMarkdown: 'threads/Why%20A%20Harder%20Interview%20Question%20Is%20Good.md',
  },
  {
    pathInApp: 'why-cross-platform-frameworks-struggle',
    title: 'Why Cross Platform Frameworks Struggle',
    pathInMarkdown: 'threads/Why%20Cross%20Platform%20Frameworks%20Struggle.md',
  },
  { pathInApp: 'why-imber-failed', title: 'Why Imber Failed', pathInMarkdown: 'threads/Why%20Imber%20Failed.md' },
  {
    pathInApp: 'why-junior-engineers-are-not-given-chances',
    title: 'Why Junior Engineers Are Not Given Chances',
    pathInMarkdown: 'threads/Why%20Junior%20Engineers%20Are%20Not%20Given%20Chances.md',
  },
  {
    pathInApp: 'why-interviewers-is-not-helping-you',
    title: 'Why Your Interviewer Is Not Helping You',
    pathInMarkdown: 'threads/Why%20Your%20Interviewer%20Is%20Not%20Helping%20You.md',
  },
];

export const rewriteContentPaths = (content: string) => {
  return pathTitleMaps.reduce<string>((previousContent, mapping) => {
    const { pathInMarkdown, pathInApp } = mapping;

    return previousContent.replace(new RegExp(pathInMarkdown, 'gmi'), `posts/${pathInApp}`);
  }, content);
};
