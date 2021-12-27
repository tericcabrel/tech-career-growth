type Props = {
  colSpan: number;
};

const TableNoRow = ({ colSpan }: Props) => {
  return (
    <tr>
      <td className="text-center py-4" colSpan={colSpan}>
        No data at the moment
      </td>
    </tr>
  );
};

export default TableNoRow;
