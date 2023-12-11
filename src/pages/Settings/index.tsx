import { Button, FileButton, Grid, Stack, Text, TextInput } from "@mantine/core";
import Layout from "../../view/layout";
import { useState } from "react";
import { useForm } from '@mantine/form';
import { IconCloudUpload, IconDeviceFloppy } from "@tabler/icons-react";

export default function Settings() {
    const [setFile] = useState<File | null>(null);
    
    const ICON_SIZE = 16;
    
      const accountForm = useForm({
        initialValues: {
          username: 'kelvinkiprop',
          biograghy:
            'A dynamic software engineering graduate from Nairobi, Kenya with 5+ years of experience. Passionate about turning creative sparks into seamless applications through technological experimentation. Experienced in crafting intuitive solutions and translating innovative concepts into user-friendly applications. Thrives on transforming the way we experience technology, one line of code at a time.\n' +
            '\n' +
            'Enthusiastic pioneer, constantly seeking the next big thing in tech. Eager to apply my passion and skills at Alternate Limited to bring ideas to life.',
        },
      });
      
    return (
        <>
        <Layout 
        mainContent={
            <>
            <Text size="lg" fw={600} mb="md">
              User information
            </Text>
            <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
              <Grid.Col span={{ base: 12, md: 6, lg: 9 }}>
                <Stack>
                  <TextInput
                    label="User Name"
                    placeholder="user name"
                    {...accountForm.getInputProps('username')}
                  />
                  <Button
                    style={{ width: 'fit-content' }}
                    leftSection={<IconDeviceFloppy size={ICON_SIZE} />}
                  >
                    Save Changes
                  </Button>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Stack align="center">
                  <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => (
                      <Button
                        {...props}
                        variant="subtle"
                        leftSection={<IconCloudUpload size={ICON_SIZE} />}
                      >
                        Upload image
                      </Button>
                    )}
                  </FileButton>
                  <Text ta="center" size="xs" c="dimmed">
                    For best results, use an image at least 128px by 128px in
                    .jpg format
                  </Text>
                </Stack>
              </Grid.Col>
            </Grid>
            </>
        }
        children={undefined}/>
        </>
    )

}