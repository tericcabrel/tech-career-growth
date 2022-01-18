import { PropsWithChildren } from 'react';
import Header from './header';
import Footer from './footer';

const PublicLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="container max-w-screen-xl mx-auto">
      <Header />
      <div className="relative">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default PublicLayout;
