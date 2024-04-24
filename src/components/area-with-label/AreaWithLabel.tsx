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
        fontSize={'small'}
        fontWeight={'bold'}
        color={'gray.600'}
        textTransform={'uppercase'}>
        {props.label}
      </Text>
      {props.children}
    </Box>
  );
}
