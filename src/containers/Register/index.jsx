/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom'; 

import { api } from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';

import { Button } from '../../components/Button';
import Logo from '../../assets/LogoMain.svg';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
  Link,
} from './styles';


export function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      name: yup.string().required('O nome é obrigatório'),
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .required('A senha é obrigatória'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );
      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso!');
      } else if (status === 409) {
        toast.error('Email Existente! Faça Login para Continuar');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no Sistema ! Tente Novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar Conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
          </InputContainer>
          <InputContainer>
            <label>Email</label>
            <input type="email" {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            {errors.password && <span>{errors.password.message}</span>}
          </InputContainer>
          <InputContainer>
            <label>Confirmar Senha</label>
            <input type="password" {...register('confirmPassword')} />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </InputContainer>
          <Button type="submit">CRIAR CONTA</Button>
        </Form>
        <p>
          Já possui conta? <Link to={'/login'}>Clique aqui.</Link>
        </p>
      </RightContainer>
      <ToastContainer autoClose={2000} theme="dark" />
    </Container>
  );
}
