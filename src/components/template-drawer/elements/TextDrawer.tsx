import { TextElement } from '../../../model/template.model';
import { Text } from '@chakra-ui/react';
import { PersonalData } from '../../../model/personal-data.model';

interface TextDrawerProps {
  element: TextElement;
  data: PersonalData;
}

export function TextDrawer(props: TextDrawerProps) {
  return (
    <Text
      position={'absolute'}
      top={props.element.position.top + '%'}
      left={props.element.position.left + '%'}
      color={props.element.style.color}
      fontSize={props.element.style.size}>
      {props.data[props.element.personalDataField]}
    </Text>
  );
}
