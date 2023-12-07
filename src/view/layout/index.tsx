import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group } from '@mantine/core';
import './home.module.css'
import NavbarSimple from "../../components/sidebar";
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode
  mainContent?: ReactNode
}

function Layout({ children, mainContent }: LayoutProps ){
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
            <strong>Stagi Salon</strong>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar>
          <NavbarSimple/>
        </AppShell.Navbar>
        <AppShell.Main>{mainContent ? mainContent : children}</AppShell.Main>
      </AppShell>
    )
}

export default Layout;