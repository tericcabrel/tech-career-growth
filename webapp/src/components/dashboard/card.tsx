import { PropsWithChildren } from 'react';
import classNames from 'classnames';

type CardColor = 'blue' | 'green' | 'yellow' | 'pink';

type Props = {
  color: CardColor;
  label: string;
  value: string;
};

const colorsClasses: Record<CardColor, string> = {
  blue: 'text-blue-500 bg-blue-100',
  green: 'text-green-500 bg-green-100',
  yellow: 'text-yellow-500 bg-yellow-100',
  pink: 'text-pink-500 bg-pink-100',
};

const DashboardCard = ({ children, color, label, value }: PropsWithChildren<Props>) => {
  const iconClasses = classNames('p-3 mr-4 rounded-full', colorsClasses[color]);

  return (
    <div className="flex items-center p-4 bg-white border rounded-lg shadow-xs">
      <div className={iconClasses}>{children}</div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">{label}</p>
        <p className="text-lg font-semibold text-gray-700">{value}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
