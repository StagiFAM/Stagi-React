import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import TableUser from '../../components/TableUser';
import addClientButton from '../../components/addClientButton';
import classes from './gridHome.module.css'
import Scheduler from '../../components/Scheduler';

const PRIMARY_COL_HEIGHT = rem(500);

export function GridHome() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="xl" fluid h={50} >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing='md'>
      <TableUser/>
        <Grid gutter="md">
          <Grid.Col>
          </Grid.Col>
          <Container my="xl" fluid h={90} >
            <Scheduler/>
          </Container>
          {/* <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col> */}
        </Grid>
      </SimpleGrid>
    </Container>
  );
}