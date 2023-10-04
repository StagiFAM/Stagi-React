import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea } from '@mantine/core';
import classes from './table.module.css';
import addClientButton from '../addClientButton';
import Demo from '../addClientButton';

const data = [
  {
    name: 'Aline',
    service: 'Cilios',
    time: '10:20',
  },
];

export default function TableUser() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.time}</Table.Td>
      <Table.Td>{row.service}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={700} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
      <Table miw={700}>
        <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
        <Demo/>
          <Table.Tr>
            <Table.Th>Nome</Table.Th>
            <Table.Th>Horário</Table.Th>
            <Table.Th>Serviço</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}