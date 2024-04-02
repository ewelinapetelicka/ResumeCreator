import { Box, Button, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectIsUserLogged } from '../../store/user/user.slice';

export function Header() {
  const isLogged = useSelector(selectIsUserLogged);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <Box>
      <Box
        bg={'white'}
        h={'87px'}
        m={'0 10px 0 10px'}
        p={'0 0 0 20px'}
        gap={'5px'}
        display={'flex'}
        alignItems={'center'}
        boxShadow={'0px 1px 4px #e1e1e1'}
        borderRadius={'10px'}>
        <Text fontWeight={'bolder'} fontSize={'xx-large'}>
          R
        </Text>
        <Text
          textTransform={'uppercase'}
          fontWeight={'bolder'}
          letterSpacing={'5px'}>
          esume
        </Text>
        <Text fontWeight={'bolder'} fontSize={'xx-large'}>
          C
        </Text>
        <Text
          textTransform={'uppercase'}
          fontWeight={'bolder'}
          letterSpacing={'5px'}>
          reator
        </Text>
        <Box gap={'20px'} display={'flex'}>
          {isLogged && (
            <Button
              colorScheme="gray"
              onClick={() => navigate('/resumes')}
              variant={
                location.pathname.includes('resumes') ? 'solid' : 'ghost'
              }>
              Resumes
            </Button>
          )}
          <Button
            colorScheme="gray"
            onClick={() => navigate('/templates')}
            variant={
              location.pathname.includes('templates') ? 'solid' : 'ghost'
            }>
            Templates
          </Button>
        </Box>
        {isLogged ? (
          <Button onClick={() => dispatch(logOut())}>LOGOUT</Button>
        ) : (
          <Button onClick={() => navigate('/login')}>LOGIN</Button>
        )}
      </Box>
    </Box>
  );
}
