import { Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';
import TableUser from '../../components/TableUser';
import classes from './gridHome.module.css'

const PRIMARY_COL_HEIGHT = rem(700);

export function GridHome() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md" >
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      <TableUser/>
        <Grid gutter="md">
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md"/>
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}