import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Box } from '@chakra-ui/react';

const disabledLayoutPaths = [/\/resumes\/([0-9])\/print/g];

export function Layout() {
  const location = useLocation();
  const isLayoutDisabled = disabledLayoutPaths.some((path) =>
    path.test(location.pathname),
  );

  if (isLayoutDisabled) {
    return <Outlet />;
  }

  return (
    <Box h={'100vh'} bg={'gray.100'}>
      <Header />
      <Box h={'calc(100% - 87px)'} overflowY={'auto'}>
        <Outlet />
      </Box>
    </Box>
  );
}
