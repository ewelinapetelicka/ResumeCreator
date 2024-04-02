import { useNavigate } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

export function UnauthorizedPage() {
  const navigate = useNavigate();

  return (
    <Box
      w={'100%'}
      h={'100vh'}
      bg={'gray.100'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Box
        w={'70%'}
        p={'30px'}
        boxShadow={'0px 1px 4px #e1e1e1'}
        borderRadius={'30px'}
        bg={'white'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'30px'}
        justifyContent={'center'}>
        <Text fontSize={'200px'} fontWeight={'bolder'} color={'gray.300'}>
          401
        </Text>
        <Text fontWeight={'bolder'}>
          YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE
        </Text>
        <Button onClick={() => navigate('/LOGIN')}>LOGIN</Button>
      </Box>
    </Box>
  );
}
