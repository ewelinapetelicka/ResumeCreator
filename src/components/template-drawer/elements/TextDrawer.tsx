import { TextElement } from '../../../model/template.model';
import { Text } from '@chakra-ui/react';

interface TextDrawerProps {
  element: TextElement;
}

export function TextDrawer(props: TextDrawerProps) {
  return (
    <Text
      position={'absolute'}
      top={props.element.position.top + '%'}
      left={props.element.position.left + '%'}
      color={props.element.style.color}
      fontSize={props.element.style.size}>
      Lorem ipsum dolor sit amet.
    </Text>
  );
}
