import { TextElement } from '../../../model/template.model';
import { Text } from '@chakra-ui/react';

interface TextDrawerProps {
  element: TextElement;
  data: string;
}

export function TextDrawer(props: TextDrawerProps) {
  return <Text style={props.element.style}>{props.data}</Text>;
}
