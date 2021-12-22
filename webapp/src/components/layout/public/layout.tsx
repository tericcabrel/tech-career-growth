import { PropsWithChildren } from 'react';
import PublicHeader from './header';
import PublicFooter from './footer';

const PublicLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="container mx-auto">
      <PublicHeader />
      <div className="relative top-[65px]">
        {children}
        <PublicFooter />
      </div>
    </div>
  );
};

export default PublicLayout;
