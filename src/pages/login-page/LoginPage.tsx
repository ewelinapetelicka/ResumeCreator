import { Box, Button, Input, InputGroup, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useHttpClient } from '../../hooks/http-client/use-http-client';
import { useDispatch } from 'react-redux';
import { logIn } from '../../store/user/user.slice';
import { useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('user@gmail.com');
  const [password, setPassword] = useState('123456');
  const http = useHttpClient();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function signIn() {
    http
      .post<{ accessToken: string }>('login', {
        email: email,
        password: password,
      })
      .then((token) => {
        dispatch(logIn(token.accessToken));
        navigate('/resumes');
      });
  }

  return (
    <Box
      w={'100%'}
      h={'100vh'}
      bg={'gray.100'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Box
        w={'40%'}
        p={'30px'}
        boxShadow={'0px 1px 4px #e1e1e1'}
        borderRadius={'30px'}
        bg={'white'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'30px'}
        justifyContent={'center'}>
        <Text fontSize={'x-large'}>LOGIN</Text>
        <InputGroup
          w={'80%'}
          display={'flex'}
          flexDirection={'column'}
          gap={'30px'}>
          <Input
            placeholder={'email address'}
            onChange={(event) => setEmail(event.target.value)}></Input>
          <Input
            placeholder={'password'}
            onChange={(event) => setPassword(event.target.value)}></Input>
        </InputGroup>
        <Text>
          Don't have an account yet?{' '}
          <Button variant={'link'}>Create account</Button>
        </Text>
        <Button onClick={() => signIn()}>LOGIN</Button>
      </Box>
    </Box>
  );
}
