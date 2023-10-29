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
import { Link, useLocation } from 'react-router-dom';

const data = [
  { link: '/home', label: 'Agenda', icon: IconCalendar },
  { link: '/client', label: 'Clientes', icon: IconUsers },
  { link: '/finance', label: 'Finanças', icon: IconBrandCashapp },
  { link: '/stock', label: 'Estoque', icon: IconPackage },
  { link: '/report', label: 'Relatório', icon: IconFileAnalytics },
  { link: '/settings', label: 'Configurações', icon: IconSettings },
];

export default function NavbarSimple() {
  const location = useLocation();
  const [active, setActive] = useState(() => {
    const found = data.find(item => location.pathname.startsWith(item.link));
    return found ? found.label : '';
  });

  const links = data.map((item) => (
    <Link
      to={item.link} 
      className={`${classes.link} ${item.label === active ? classes.active : ''}`}
      key={item.label}
      onClick={() => setActive(item.label)}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
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