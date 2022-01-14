import Sentry from '@sentry/nextjs';

const logToSentry = async (error: any) => {
  console.error(error.message);

  Sentry.captureException(error);

  // Flushing before returning is necessary if deploying to Vercel, see
  // https://vercel.com/docs/platform/limits#streaming-responses
  await Sentry.flush(2000);
};

export { logToSentry };
