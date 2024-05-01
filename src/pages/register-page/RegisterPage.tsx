import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../hooks/http-client/use-http-client';
import { useDispatch } from 'react-redux';
import { logIn, setUser } from '../../store/user/user.slice';
import { User } from '../../model/user.model';
import { JwtDecoderUtils } from '../../utils/jwt-decoder/jwt-decoder-utils';
import { PersonalDataUtils } from '../../utils/personal-data/personal-data-utils';

export function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [isIdentical, setIsIdentical] = useState(true);
  const http = useHttpClient();
  const dispatch = useDispatch();

  useEffect(() => {
    setIsIdentical(confirmPassword === password);
  }, [confirmPassword, password]);

  async function createAccount() {
    const token = await http.post<{ accessToken: string }>('register', {
      email: email,
      password: password,
      personalData: PersonalDataUtils.generateEmpty(),
    });
    dispatch(logIn(token.accessToken));
    const user = await http.get<User>(
      'users/' + JwtDecoderUtils.decode(token.accessToken).sub,
    );
    dispatch(setUser(user));
    navigate('/resumes');
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
        <Text fontSize={'x-large'}>SignUp</Text>
        <InputGroup
          w={'80%'}
          display={'flex'}
          flexDirection={'column'}
          gap={'30px'}>
          <Input
            placeholder={'email address'}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputGroup>
            <Input
              onChange={(event) => setPassword(event.target.value)}
              placeholder={'password'}
              type={show ? 'text' : 'password'}
              value={password}
              isInvalid={!isIdentical}
              errorBorderColor={'red.600'}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <InputGroup>
            <Input
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder={'confirm password'}
              type={show ? 'text' : 'password'}
              value={confirmPassword}
              isInvalid={!isIdentical}
              errorBorderColor={'red.600'}
            />
          </InputGroup>
        </InputGroup>
        <Text>
          Already have an account?
          <Button
            variant={'link'}
            m={'6px'}
            textDecoration={'underline'}
            onClick={() => navigate('/login')}>
            Login
          </Button>
        </Text>
        <Button onClick={() => createAccount()}>Create account</Button>
      </Box>
    </Box>
  );
}
