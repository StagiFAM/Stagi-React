import { useState } from 'react';
import { Container, Group } from '@mantine/core';
import {
  IconSettings,
  IconLogout,
  IconUsers,
  IconCalendar,
  IconBrandCashapp,
  IconPackage,
  IconFileAnalytics
} from '@tabler/icons-react';
import classes from './sidebar.module.css';

const data = [
  { link: '', label: 'Agenda', icon: IconCalendar },
  { link: '', label: 'Clientes', icon: IconUsers },
  { link: '', label: 'Finanças', icon: IconBrandCashapp },
  { link: '', label: 'Estoque', icon: IconPackage },
  { link: '', label: 'Relatório', icon: IconFileAnalytics },
  { link: '', label: 'Configurações', icon: IconSettings },
];

export default function NavbarSimple() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Container pr={40} pos={'relative'}>
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
        </Group>
        {links}
      </div>

      <div className={classes.footer}>

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Sair</span>
        </a>
      </div>
    </nav>
    </Container>
  );
}