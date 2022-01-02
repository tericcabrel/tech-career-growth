import classNames from 'classnames';
import { RequestStatus } from '@/types/model';

type Props = {
  value: RequestStatus;
};

const pillStatuses: Record<RequestStatus, string> = {
  PENDING: 'text-yellow-600 bg-yellow-200',
  DONE: 'text-green-600 bg-green-200',
  ARCHIVED: 'text-red-600 bg-red-200',
};

const RequestStatusPill = ({ value }: Props) => {
  const classes = classNames('px-4 py-2 text-xs rounded-full lowercase', pillStatuses[value]);
  return <span className={classes}>{value}</span>;
};

export default RequestStatusPill;
