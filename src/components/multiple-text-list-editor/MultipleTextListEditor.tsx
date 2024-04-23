import { Box, Text } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface MultipleTextListEditorProps {
  label: string;
  children: ReactNode;
}

export function MultipleTextListEditor(props: MultipleTextListEditorProps) {
  return (
    <Box>
      <Text
        display={'flex'}
        justifySelf={'start'}
        w={'100%'}
        fontSize={'small'}
        fontWeight={'bold'}
        color={'Gray 600'}
        textTransform={'uppercase'}
        m={'0'}>
        {props.label}
      </Text>
      {props.children}
    </Box>
  );
}
