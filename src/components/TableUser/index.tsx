import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './table.module.css';
import addClientButton from '../addClientButton';
import Demo from '../addClientButton';

export default function TableUser({ products }) {
  const [scrolled, setScrolled] = useState(false);

  const rows = products.map((product: any, index: any) => (
    <Table.Tr key={index}>
      <Table.Td>{product.name}</Table.Td>
      <Table.Td>{product.quantity}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={700} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
        <Demo/>
          <Table.Tr>
            <Table.Th>Nome</Table.Th>
            <Table.Th>Quantidade</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}