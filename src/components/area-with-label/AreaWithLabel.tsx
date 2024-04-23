import { Box, ListItem, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface AreaWithLabelProps {
  label: string;
  children: ReactNode;
}

export function AreaWithLabel(props: AreaWithLabelProps) {
  return (
    <Box>
      <Text
        display={'flex'}
        justifySelf={'start'}
        w={'100%'}
        fontSize={'small'}
        fontWeight={'bold'}
        color={'Gray 600'}
        textTransform={'uppercase'}>
        {props.label}
      </Text>
      {props.children}
    </Box>
  );
}
