import { EmptyElement } from '../../../model/template.model';
import { Box } from '@chakra-ui/react';

interface EmptyDrawerProps {
  element: EmptyElement;
}

export function EmptyDrawer(props: EmptyDrawerProps) {
  return <Box style={props.element.style} />;
}
