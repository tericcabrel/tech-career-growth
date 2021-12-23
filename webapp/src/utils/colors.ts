import { BgColorVariants } from '@/types/common';

const backgroundColors: Record<BgColorVariants, string> = {
  primary: 'bg-green-600 active:bg-green-600 hover:bg-green-700 focus:shadow-outline-green',
  red: 'bg-red-600 hover:bg-red-700 focus:shadow-outline-red',
  whiteGray: 'bg-white text-gray-700 hover:bg-gray-5 border-gray-300 focus:shadow-outline-gray',
};

export { backgroundColors };
