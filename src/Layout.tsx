import { Outlet } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Box } from '@chakra-ui/react';

export function Layout() {
  return (
    <Box h={'100vh'} bg={'gray.100'}>
      <Header />
      <Box h={'calc(100% - 87px)'} overflowY={'auto'}>
        <Outlet />
      </Box>
    </Box>
  );
}
