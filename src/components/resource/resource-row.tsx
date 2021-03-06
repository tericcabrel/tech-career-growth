import Link from 'next/link';
import { Resource } from '@/types/model';
import { extractHostNameFromURL, formatDate } from '@/utils/common';
import PencilIcon from '@/components/icons/pencil';
import CrossIcon from '@/components/icons/cross';

type Props = {
  item: Resource;
  triggerDeleteDialog: () => void;
};

const ResourceRow = ({ item, triggerDeleteDialog }: Props) => {
  const { dateString, humanDate } = formatDate(item.createdAt);

  return (
    <tr>
      <td className="px-6 py-4 w-1/3">
        <div className="text-sm font-medium text-gray-900">{item.name}</div>
      </td>
      <td className="px-6 py-4 w-1/5">
        <div className="text-sm font-medium text-gray-900">{item.category?.name || 'Not defined'}</div>
      </td>
      <td className="px-6 py-4 w-[10%]]">
        <div className="text-sm font-medium text-gray-900">{item.type}</div>
      </td>
      <td className="px-6 py-4 w-1/5">
        <Link href={item.link}>
          <a className="text-sm underline font-medium text-green-900" target="_blank" title={item.link}>
            {extractHostNameFromURL(item.link)}
          </a>
        </Link>
      </td>
      <td className="px-6 py-4 w-[12%]">
        <div className="text-sm font-medium text-gray-900" title={dateString}>
          {humanDate}
        </div>
      </td>
      <td className="flex justify-end px-6 py-4 text-right text-sm font-medium">
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
