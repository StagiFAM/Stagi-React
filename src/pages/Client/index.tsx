import { Avatar, Checkbox, Group, ScrollArea, Table, Text, Title, rem } from "@mantine/core";
import classes from './TableSelection.module.css';
import cx from 'clsx';
import Layout from "../../view/layout";
import { useState } from "react";

const data = [
    {
      id: '1',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
      name: 'Robert Wolfkisser',
      job: 'Cabeleleiro',
      email: 'rob_wolf@gmail.com',
      cpf: '47818588809'
    },
    {
      id: '2',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
      name: 'Manuela Jail',
      job: 'Estetica',
      email: 'jj@breaker.com',
      cpf: '47818588809'
    },
    {
      id: '3',
      avatar:
        'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
      name: 'Henry Silkeater',
      job: 'Cabeleleiro',
      email: 'henry@silkeater.io',
      cpf: '47818588809'
    },
    {
        id: '4',
        avatar:
          'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
        name: 'Jessica Nogueira',
        job: 'Estetica',
        email: 'jj@breaker.com',
        cpf: '47818588809'
      },
  ];

function Client () {
    const [selection, setSelection] = useState(['1']);
    const toggleRow = (id: string) =>
      setSelection((current) =>
        current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
      );
    const toggleAll = () =>
      setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));
  
    const rows = data.map((item) => {
      const selected = selection.includes(item.id);
      return (
        <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
          <Table.Td>
            <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
          </Table.Td>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} src={item.avatar} radius={26} />
              <Text size="sm" fw={500}>
                {item.name}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.email}</Table.Td>
          <Table.Td>{item.job}</Table.Td>
          <Table.Td>{item.cpf}</Table.Td>
        </Table.Tr>
      );
    });
    return (
        <Layout 
        mainContent={<>
        <Title>
            Tabela Clientes
        </Title>
        <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{ width: rem(40) }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
              />
            </Table.Th>
            <Table.Th>Cliente</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Trabalho</Table.Th>
            <Table.Th>CPF</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
        </>} 
        children={undefined} />
     )
}

export default Client