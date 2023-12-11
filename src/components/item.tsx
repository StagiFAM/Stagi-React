import React from 'react';
import { Card, Text, Badge } from '@mantine/core';
import { ItemData } from '../@types/types';

interface ItemProps {
  item: ItemData;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDelete, onEdit }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" style={{ marginBottom: '10px' }}>
      <Text size="lg">
        {item.nome}
      </Text>
      <Text size="lg">Marca: {item.marca}</Text>
      <Text size="sm">Quantidade: {item.quantidade}</Text>
      <Text size="sm">Preço: R${item.preco.toFixed(2)}</Text>
      <Text size="sm">Data de Validade: {item.dataValidade}</Text>
      <Text size="sm">Entrada: {item.inicio}</Text>
      <Text size="sm">Saída: {item.saida}</Text>
      <Badge variant="filled" color="red" onClick={() => onDelete(item.id)}>
        Excluir
      </Badge>
      <Badge variant="filled" color="blue" onClick={() => onEdit(item.id)}>
        Editar
      </Badge>
    </Card>
  );
};

export default Item;
