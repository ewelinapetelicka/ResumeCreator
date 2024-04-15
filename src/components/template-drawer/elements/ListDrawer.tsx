import { Element, ListElement } from '../../../model/template.model';
import { Flex } from '@chakra-ui/react';
import {
  PersonalDataDescribable,
  PersonalDataField,
  PersonalDataValue,
} from '../../../model/personal-data.model';
import { ElementDrawer } from './ElementDrawer';

interface ListDrawerProps {
  element: ListElement;
  data: PersonalDataDescribable[];
}

export function ListDrawer(props: ListDrawerProps) {
  function getData(
    element: Element,
    data: PersonalDataDescribable,
    field: PersonalDataField,
  ): PersonalDataValue {
    return (
      element.staticData || data[field as keyof PersonalDataDescribable] || ''
    );
  }

  return (
    <Flex style={props.element.style}>
      {props.data.map((data, i) => (
        <Flex style={props.element.dataStyle} key={data.name}>
          {props.element.fields.map((field) => (
            <Flex style={field.style} key={field.field}>
              {field.elements.map((element, j) => (
                <ElementDrawer
                  element={element}
                  data={getData(element, data, field.field)}
                  key={j}
                />
              ))}
            </Flex>
          ))}
        </Flex>
      ))}
    </Flex>
  );
}
