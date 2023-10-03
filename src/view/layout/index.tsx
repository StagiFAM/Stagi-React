import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group } from '@mantine/core';
import './home.module.css'
import NavbarSimple from "../../components/sidebar";
import { GridHome } from '../gridHome';

function Layout(){
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
        header={{ height: { base: 60, md: 70, lg: 70 } }}
        navbar={{
          width: { base: 200, md: 200, lg: 200 },
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <strong>Stagi</strong>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar>
          <NavbarSimple/>
        </AppShell.Navbar>
        <AppShell.Main>
          <GridHome/>
        </AppShell.Main>
      </AppShell>
    )
}

export default Layout;