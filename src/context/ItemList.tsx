import React from 'react';
import { Table} from '@mantine/core';
import { ItemData } from '../@types/types';

interface ItemListProps {
  items: ItemData[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit }) => {
  return (
    <Table miw={700}>
    <Table.Tr style={{ marginTop: '20px' }}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Nome</Table.Th>
          <Table.Th>Quantidade</Table.Th>
          <Table.Th>Marca</Table.Th>
          <Table.Th>Data de Validade</Table.Th>
          <Table.Th>Preço</Table.Th>
          <Table.Th>Início</Table.Th>
          <Table.Th>Saída</Table.Th>
          <Table.Th>Ações</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items.map((item) => (
          <Table.Tr key={item.id}>
            <Table.Td>{item.nome}</Table.Td>
            <Table.Td>{item.quantidade}</Table.Td>
            <Table.Td>{item.marca}</Table.Td>
            <Table.Td>{item.dataValidade}</Table.Td>
            <Table.Td>{item.preco}</Table.Td>
            <Table.Td>{item.inicio}</Table.Td>
            <Table.Td>{item.saida}</Table.Td>
            <Table.Td>
              <button onClick={() => onDelete(item.id)}>Excluir</button>
              <button onClick={() => onEdit(item.id)}>Editar</button>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table.Tr>
    </Table>
  );
};

export default ItemList;
