import dynamic from 'next/dynamic';

const Resources = dynamic(() => import('@/containers/private/resources'));

const ResourcesPage = () => {
  return <Resources />;
};

ResourcesPage.auth = {
  redirectTo: '/',
};

export default ResourcesPage;
