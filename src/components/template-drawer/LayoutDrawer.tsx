import { Flex } from '@chakra-ui/react';
import { Element, Layout } from '../../model/template.model';
import { ElementDrawer } from './elements/ElementDrawer';
import {
  PersonalData,
  PersonalDataField,
} from '../../model/personal-data.model';

interface LayoutDrawerProps {
  layout: Layout;
  elements: Element[];
  data: PersonalData;
}

export function LayoutDrawer(props: LayoutDrawerProps) {
  function getData(
    element: Element,
    personalDataField: PersonalDataField,
  ): string {
    if (element.staticData) {
      return element.staticData[personalDataField];
    }
    return props.data[personalDataField] as string;
  }

  return (
    <Flex position={'absolute'} style={props.layout.style}>
      {props.layout.fields.map((field) => (
        <Flex style={props.layout.elementWrapperStyle} key={field.field}>
          {field.elements.map((elementId, i) => {
            const element = props.elements.find((el) => el.id === elementId)!;

            return (
              <ElementDrawer
                element={element}
                data={getData(element, field.field)}
                key={i}
              />
            );
          })}
        </Flex>
      ))}
    </Flex>
  );
}
