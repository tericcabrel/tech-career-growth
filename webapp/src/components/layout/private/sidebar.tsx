import Image from 'next/image';
import Link from 'next/link';
import SidebarLink from '@/components/common/sidebar-link';
import DashboardIcon from '@/components/icons/dashboard';
import CategoryIcon from '@/components/icons/category';
import UsersIcon from '@/components/icons/users';
import ResourceIcon from '@/components/icons/resource';
import RequestIcon from '@/components/icons/request';

const menus = [
  {
    icon: <DashboardIcon />,
    label: 'Dashboard',
    path: '/private/dashboard',
  },
  {
    icon: <ResourceIcon />,
    label: 'Resources',
    path: '/private/resources',
  },
  {
    icon: <RequestIcon />,
    label: 'Requests',
    path: '/private/requests',
  },
  {
    icon: <CategoryIcon />,
    label: 'Categories',
    path: '/private/categories',
  },
  {
    icon: <UsersIcon />,
    label: 'Users',
    path: '/private/users',
  },
];

const Sidebar = () => {
  return (
    <>
      <aside className="z-20 hidden w-64 overflow-y-auto bg-gray-600 md:block flex-shrink-0">
        <div className="py-4">
          <div className="ml-6 text-lg font-bold text-white">
            <Link href="/">
              <a className="flex items-center" target="_blank">
                <Image src="/assets/logo.jpg" width={36} height={36} alt="App Logo" />
                <div className="ml-4">TECH CAREER</div>
              </a>
            </Link>
          </div>
          <ul className="mt-6 text-white">
            {menus.map((menu) => {
              return (
                <li className="relative px-6 py-3" key={menu.label}>
                  <SidebarLink href={menu.path}>
                    {menu.icon}
                    <span className="ml-4">{menu.label}</span>
                  </SidebarLink>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
