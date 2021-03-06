import { Request } from '@/types/model';
import dayjs from '@/utils/date';
import PencilIcon from '@/components/icons/pencil';
import CrossIcon from '@/components/icons/cross';
import RequestStatusPill from '@/components/request/request-status-pill';

type Props = {
  item: Request;
  triggerDeleteDialog: () => void;
  triggerEditDialog: () => void;
};

const RequestRow = ({ item, triggerDeleteDialog, triggerEditDialog }: Props) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.userName}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.userEmail}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.category?.name || 'Not defined'}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <RequestStatusPill value={item.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {dayjs(item.createdAt).format('DD MMM YYYY [at] HH:mm')}
        </div>
      </td>
      <td className="flex justify-end px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          className="flex items-center justify-between px-1.5 py-1.5 text-lg font-medium leading-5 bg-white border border-transparent rounded-lg hover:border-green-600 hover:text-green-700 focus:outline-none"
          aria-label="Edit"
          onClick={triggerEditDialog}
        >
          <PencilIcon className="h-5 w-5 text-green-600" />
        </button>
        <button
          className="flex items-center justify-between ml-2 px-1.5 py-1.5 text-lg font-medium leading-5 bg-white border border-transparent rounded-lg hover:border-red-600 hover:text-red-700 focus:outline-none"
          aria-label="Delete"
          onClick={triggerDeleteDialog}
        >
          <CrossIcon className="h-5 w-5 text-red-600" />
        </button>
      </td>
    </tr>
  );
};

export default RequestRow;
