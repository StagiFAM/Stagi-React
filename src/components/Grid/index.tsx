import React from "react";
import GridItem from "../GridItem";
import * as C from "./style";

interface Transaction {
  id: number;
  desc: string;
  amount: string;
  expense: boolean;
}

interface GridProps {
  itens: Transaction[];
  setItens: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const Grid: React.FC<GridProps> = ({ itens, setItens }) => {
  const onDelete = (ID: number) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <C.Table>
      <C.Thead>
        <C.Tr>
          <C.Th >Descrição</C.Th>
          <C.Th >Valor</C.Th>
          <C.Th>
            Tipo
          </C.Th>
          <C.Th></C.Th>
        </C.Tr>
      </C.Thead>
      <C.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};

export default Grid;
