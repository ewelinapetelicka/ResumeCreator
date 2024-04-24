import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CiUser } from 'react-icons/ci';
import { User } from '../../model/user.model';

interface CustomAvatarProps {
  user?: User;
  onClick?: () => void;
}

export function CustomAvatar(props: CustomAvatarProps) {
  return (
    <Flex
      borderRadius={'50px'}
      fontSize={'x-large'}
      m={'6px'}
      minW={'50px'}
      minH={'50px'}
      cursor={'pointer'}
      justifyContent={'center'}
      alignItems={'center'}
      bgColor={'gray.100'}
      onClick={() => props.onClick && props.onClick()}>
      {props.user?.name && props.user.surname ? (
        <>
          <Text>{props.user.name.slice(0, 1)}</Text>
          <Text>{props.user.surname.slice(0, 1)}</Text>
        </>
      ) : (
        <CiUser />
      )}
    </Flex>
  );
}
