import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../services/api';

import { Button } from '../../components/Button';
import Logo from '../../assets/LogoMain.svg';
import {
  Container,
  Form,
  InputContainer,
  LeftContainer,
  RightContainer,
  Title,
} from './styles';

export function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um email válido')
        .required('O email é obrigatório'),
      password: yup
        .string()
        .min(6, 'A senha deve ter no mínimo 6 caracteres')
        .required('A senha é obrigatória'),
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

  const onSubmit = (data) => {
    api.post('/session', {
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Button type="submit">ENTRAR</Button>
        </Form>
        <p>
          Não possui conta? <a>Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  );
}
