import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from '@mantine/core';
import classes from './login.module.css';
import { useNavigate } from "react-router-dom";

function Login () {
    const navigate = useNavigate();

    function entrarNaHome() {
      navigate('/home');
    }
    return (
      <Container size={520} my={40} mt={200}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@gmail.com" required />
        <PasswordInput label="Senha" placeholder="Sua senha" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Lembrar-me" />
        </Group>
        <Button fullWidth mt="xl" onClick={entrarNaHome}>
          Entrar
        </Button>
      </Paper>
    </Container>
    )
}

export default Login;