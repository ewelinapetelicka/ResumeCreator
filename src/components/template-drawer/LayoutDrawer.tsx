import { Badge, Box, Flex } from '@chakra-ui/react';
import { Element, Layout } from '../../model/template.model';
import { ElementDrawer } from './elements/ElementDrawer';
import {
  PersonalData,
  PersonalDataField,
  PersonalDataValue,
} from '../../model/personal-data.model';

interface LayoutDrawerProps {
  layout: Layout;
  data: PersonalData;
}

export function LayoutDrawer(props: LayoutDrawerProps) {
  function getData(
    element: Element,
    field: PersonalDataField,
  ): PersonalDataValue {
    return element.staticData || props.data[field as keyof PersonalData];
  }

  return (
    <Flex position={'absolute'} style={props.layout.style}>
      {props.layout.fields.map((field) => (
        <Flex style={field.style} key={field.field}>
          {field.elements.map((element, i) => (
            <ElementDrawer
              element={element}
              data={getData(element, field.field)}
              key={i}
            />
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
