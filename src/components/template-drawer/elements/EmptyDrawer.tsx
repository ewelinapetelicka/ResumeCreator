import { EmptyElement } from '../../../model/template.model';
import React from 'react';
import { Box } from '@chakra-ui/react';

interface EmptyDrawerProps {
  element: EmptyElement;
}

export function EmptyDrawer(props: EmptyDrawerProps) {
    return <Box style={props.element.style} />;
}
