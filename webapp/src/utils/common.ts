import dayjs from './date';

export const extractHostNameFromURL = (websiteURL: string) => {
  let getTheHostName;

  if (websiteURL.indexOf('//') > -1) {
    getTheHostName = websiteURL.split('/')[2];
  } else {
    getTheHostName = websiteURL.split('/')[0];
  }

  getTheHostName = getTheHostName.split(':')[0];
  getTheHostName = getTheHostName.split('?')[0];

  return getTheHostName;
};

export const formatDate = (date: Date) => {
  const humanDate = dayjs(date).fromNow();
  const dateString = dayjs(date).format('DD MMMM YYYY at HH:mm');

  return { humanDate, dateString };
};
