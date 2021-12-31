import Link from 'next/link';
import { Resource } from '@/types/model';
import PencilIcon from '@/components/icons/pencil';
import CrossIcon from '@/components/icons/cross';

type Props = {
  item: Resource;
  triggerDeleteDialog: () => void;
};

const ResourceRow = ({ item, triggerDeleteDialog }: Props) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.category?.name || 'Not defined'}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.type}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.link}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{item.createdAt}</div>
      </td>
      <td className="flex justify-end px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <Link href={`/private/resources/${item.id}/edit`}>
          <a
            className="flex items-center justify-between px-1.5 py-1.5 text-lg font-medium leading-5 bg-white border border-transparent rounded-lg hover:border-purple-600 hover:text-purple-700 focus:outline-none"
            aria-label="Edit"
          >
            <PencilIcon className="h-5 w-5 text-purple-600" />
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

export default ResourceRow;
