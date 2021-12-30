import Link from 'next/link';
import { Request } from '@/types/model';
import PencilIcon from '@/components/icons/pencil';
import CrossIcon from '@/components/icons/cross';

type Props = {
  item: Request;
  triggerDeleteDialog: () => void;
};

const RequestRow = ({ item, triggerDeleteDialog }: Props) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.userName}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.userEmail}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.category.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.createdAt}</div>
      </td>
      <td className="flex justify-end px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={`/private/resources/${item.id}`}>
          <a
            className="flex items-center justify-between px-1.5 py-1.5 text-lg font-medium leading-5 bg-white border border-transparent rounded-lg hover:border-green-600 hover:text-green-700 focus:outline-none"
            aria-label="Edit"
          >
            <PencilIcon className="h-5 w-5 text-green-600" />
          </a>
        </Link>
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
