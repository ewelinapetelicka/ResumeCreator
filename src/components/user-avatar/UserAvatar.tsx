import { Avatar, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { CiUser } from 'react-icons/ci';
import { User } from '../../model/user.model';

interface UserAvatarProps {
  user: User;
  onClick?: () => void;
}

export function UserAvatar(props: UserAvatarProps) {
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
      {props.user.personalData.personalPhoto ? (
        <Avatar src={props.user.personalData.personalPhoto} />
      ) : (
        <>
          {props.user.personalData.name && props.user.personalData.surname ? (
            <>
              <Text>{props.user.personalData.name.slice(0, 1)}</Text>
              <Text>{props.user.personalData.surname.slice(0, 1)}</Text>
            </>
          ) : (
            <CiUser />
          )}
        </>
      )}
    </Flex>
  );
}
