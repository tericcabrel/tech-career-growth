import { NextSeo, DefaultSeo } from 'next-seo';

type SeoProps = {
  path?: string;
  title: string;
};

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

const GlobalSeo = () => {
  const description = 'Find the right resource to grow your career in tech.';
  const title = 'Tech Career Growth';

  return (
    <DefaultSeo
      title={title}
      description={description}
      canonical={baseUrl}
      additionalMetaTags={[
        { content: 'Alex Chiou and Rahul Pandey', property: 'author' },
        {
          content:
            'tech career growth, improve resume, build side projects, productivity, community, job search, tech salary, compensation',
          property: 'keywords',
        },
      ]}
      openGraph={{
        description,
        images: [
          {
            alt: 'Homepage image alt',
            height: 575,
            url: `${baseUrl}/assets/og.png`,
            width: 1245,
          },
        ],
        locale: 'en-US',
        site_name: 'Tech Career Growth',
        title,
        url: baseUrl,
      }}
      twitter={{
        cardType: 'summary_large_image',
        handle: '@rpandey1234',
        site: '@rpandey1234',
      }}
    />
  );
};

const PageSeo = ({ path, title }: SeoProps) => {
  const url = path ? `${baseUrl}${path}` : baseUrl;

  return <NextSeo title={title} canonical={url} />;
};

export { GlobalSeo, PageSeo };
