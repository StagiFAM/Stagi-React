import {
  TextInput,
  PasswordInput,
  Checkbox,
  Paper,
  Container,
  Group,
  Button,
} from '@mantine/core';
import * as Yup from 'yup'
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context';
import { Toast, toastHandler } from '../../components/toast';
import http from '../../http';
import { Form, Formik, FormikHelpers } from 'formik'
import { JwtAuthResponse } from '../../@types/jwtAuthResponse';

const initialValues = {
  email: '',
  password: '',
}

type FormValues = typeof initialValues

const validationSchema = Yup.object({
  email: Yup.string().required('Esse campo é obrigatório'),
  password: Yup.string().required('Esse campo é obrigatório'),
})

function Login () {
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate();
    const [toastState, setToast] = useState<toastHandler>({
      isOpen: false,
      message: '',
      status: 'warning'
    })

    async function sendDataToAPI(data: unknown) {
      try {
        const response = await http.post<JwtAuthResponse>('api/v1/auth', data)
  
        if (response) {
          localStorage.setItem('@CMTT_TOKEN_V1', response.data.token)
          localStorage.setItem(
            '@CMTT_REFRESH_TOKEN_V1',
            response.data.refreshToken,
          )
          localStorage.setItem(
            '@CMTT_USER_V1',
            JSON.stringify(response.data.user),
          )
          setUser({
            cpf: response.data.user.cpf,
            email: response.data.user.email,
            name: response.data.user.name,
            role: response.data.user.role,
            token: response.data.token,
          })
          navigate('/home')
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.response.status === 422) {
          setToast({
            isOpen: true,
            message: 'CPF ou senha inválidos',
            status: 'error',
          })
        }
      }
    }

    function handleSubmit(
      values: FormValues,
      { setSubmitting }: FormikHelpers<FormValues>,
    ): void {
      sendDataToAPI(values)
      setSubmitting(false)
    }

    // function entrarNaHome() {
    //   navigate('/home');
    // }
    return (
      <Container size={520} my={40} mt={200}>
        < Toast 
          toastHandler={toastState}
          handleToogle={() =>
          setToast({ ...toastState, isOpen: !toastState.isOpen })
        }
        />
        <Formik 
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        >
        {({ values, setFieldValue }) => (
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Form>
        <TextInput 
        label="Email"
        value={values.email}
        placeholder="you@gmail.com" 
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setFieldValue('email', e.currentTarget.value)
        }}
        required 
        />
        <PasswordInput 
        label="Senha"
        type="password" 
        value={values.password}
        autoComplete="on"
        placeholder="Sua senha"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setFieldValue('password', e.currentTarget.value)
        }}
        required mt="md" 
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Lembrar-me" />
        </Group>
        <Button fullWidth mt="xl" type="submit">
          Entrar
        </Button>
        </Form>
      </Paper>
      )}
      </Formik>
    </Container>
    )
}

export default Login;