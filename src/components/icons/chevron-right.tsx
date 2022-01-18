import { IconProps } from '@/types/common';

const ChevronRightIcon = ({ height = 24, width = 24, className }: IconProps) => {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  );
};

export default ChevronRightIcon;
