import Link from 'next/link';
import { Resource } from '@/types/model';

type Props = {
  data: Resource[];
};

const RequestResourceResult = ({ data }: Props) => {
  if (data.length === 0) {
    return (
      <div className="shadow rounded p-4 text-center text-red-500 mt-6 mb-12">
        No items found at the moment. Please click on the button below to ask the resource
      </div>
    );
  }

  return (
    <div className="mt-6 mb-12">
      <h1 className="text-2xl font-bold">Here is what we got for you:</h1>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.id} className="shadow px-4 py-2 rounded">
            <Link href={item.link}>
              <a className="underline" target="_blank noreferrer">
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestResourceResult;
