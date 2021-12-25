import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

import ProfileMenu from '@/components/layout/private/profile-menu';
import LetterAvatar from '@/components/common/letter-avatar';

const Header = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: session } = useSession({
    required: true,
  });

  const toggleProfileMenuOpen = () => {
    setIsProfileMenuOpen((prevValue) => !prevValue);
  };

  const logout = async () => {
    await signOut();
  };

  const fullName = `${session?.user?.name || ''}`;

  return (
    <header className="z-10 py-4 px-10 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-end h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <ul className="flex items-center flex-shrink-0 space-x-6">
          <li className="relative">
            <button
              className="items-center flex rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={toggleProfileMenuOpen}
              aria-label="Account"
              aria-haspopup="true"
              data-testid="btn-account-menu"
            >
              <div className="mr-2" data-testid="username">
                {fullName}
              </div>
              <LetterAvatar name={fullName} size={32} />
            </button>
            {isProfileMenuOpen && <ProfileMenu closeModal={toggleProfileMenuOpen} handleLogout={logout} />}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
