import { PropsWithChildren } from 'react';

import Header from './header';
import Sidebar from './sidebar';

const PrivateLayout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="h-full px-6 overflow-y-auto relative">{children}</main>
      </div>
    </div>
  );
};

export default PrivateLayout;
