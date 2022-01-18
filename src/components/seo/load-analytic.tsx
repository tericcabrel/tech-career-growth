import { GA_TRACKING_ID } from '@/utils/gtag';
import { isProduction } from '@/utils/common';

const LoadAnalytic = () => {
  if (!isProduction() || !Boolean(GA_TRACKING_ID)) {
    return null;
  }

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
        }}
      />
    </>
  );
};

export default LoadAnalytic;
