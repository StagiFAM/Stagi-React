import { Flex, Button, ActionIcon } from '@mantine/core';
import { IconCirclePlus, IconTrashXFilled } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Flex
      mih={60}
      gap="xs"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >

      <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'grape', to: 'pink', deg: 107 }}
    >
      <IconCirclePlus />
    </ActionIcon>
    
      <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: 'grape', to: 'pink', deg: 107 }}
    >
      <IconTrashXFilled />
    </ActionIcon>
    
    </Flex>
  );
}