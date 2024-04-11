import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CiUser } from 'react-icons/ci';

interface CustomAvatarProps {
  name?: string;
  surname?: string;
  onClick?: () => void;
}

export function CustomAvatar(props: CustomAvatarProps) {
  return (
    <Flex
      borderRadius={'50px'}
      fontSize={'x-large'}
      m={'6px'}
      w={'50px'}
      h={'50px'}
      cursor={'pointer'}
      justifyContent={'center'}
      alignItems={'center'}
      bgColor={'gray.100'}
      onClick={() => props.onClick && props.onClick()}>
      {props.name && props.surname ? (
        <>
          <Text>{props.name.slice(0, 1)}</Text>
          <Text>{props.surname.slice(0, 1)}</Text>
        </>
      ) : (
        <CiUser />
      )}
    </Flex>
  );
}
