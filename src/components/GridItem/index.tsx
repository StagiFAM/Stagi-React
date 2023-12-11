import * as C from "./style";
import { IconTrashFilled, IconCircleArrowUpFilled, IconCircleArrowDownFilled } from '@tabler/icons-react';

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td >
        {item.expense ? (
          <IconCircleArrowDownFilled color="red" />
        ) : (
          <IconCircleArrowUpFilled color="green" />
        )}
      </C.Td>
      <C.Td >
        <IconTrashFilled onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;