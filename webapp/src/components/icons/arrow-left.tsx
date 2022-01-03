import { IconProps } from '@/types/common';

const ArrowLeftIcon = ({ height = 24, width = 24, className = 'w-4 h-4 ml-1' }: IconProps) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
      width={width}
      height={height}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
};

export default ArrowLeftIcon;
