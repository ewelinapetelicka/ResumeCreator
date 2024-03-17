import { TextElement } from '../../../model/template.model';
import { Box, Text } from '@chakra-ui/react';

interface TextDrawerProps {
  element: TextElement;
}

export function TextDrawer(props: TextDrawerProps) {
  return (
    <Text
      position={'absolute'}
      top={props.element.position.top + '%'}
      left={props.element.position.left + '%'}
      w={props.element.position.width + '%'}
      h={props.element.position.height + '%'}
      color={props.element.style.color}
      fontSize={props.element.style.size}>
      Lorem ipsum dolor sit amet.
    </Text>
  );
}
