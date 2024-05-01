import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  logOut,
  selectIsUserLogged,
  selectUser,
} from '../../store/user/user.slice';
import { UserAvatar } from '../user-avatar/UserAvatar';

export function Header() {
  const isLogged = useSelector(selectIsUserLogged);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box>
      <Box
        bg={'white'}
        h={'87px'}
        m={'0 10px 0 10px'}
        p={'0 0 0 20px'}
        display={'flex'}
        alignItems={'center'}
        boxShadow={'0px 1px 4px #e1e1e1'}
        borderRadius={'10px'}
        justifyContent={'space-between'}>
        <Box display={'flex'} alignItems={'center'} gap={'5px'}>
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
          <Box gap={'20px'} display={'flex'} pl={'10px'}>
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
        </Box>
        <Flex alignItems={'center'} pr={'10px'}>
          {isLogged ? (
            <Menu>
              <MenuButton>
                <UserAvatar user={user} />
              </MenuButton>
              <MenuList>
                <MenuItem
                  minH="48px"
                  display={'flex'}
                  justifyContent={'center'}
                  onClick={() => navigate('profile')}>
                  <Text>PROFILE PAGE</Text>
                </MenuItem>
                <MenuItem
                  minH="40px"
                  display={'flex'}
                  justifyContent={'center'}
                  onClick={() => dispatch(logOut())}>
                  <Text>LOGOUT</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button onClick={() => navigate('/login')}>LOGIN</Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
