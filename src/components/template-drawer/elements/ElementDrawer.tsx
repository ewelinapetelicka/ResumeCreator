import {
  Element,
  ElementType,
  IconElement,
  ImageElement,
  ListElement,
  TextElement,
} from '../../../model/template.model';
import { TextDrawer } from './TextDrawer';
import { ImageDrawer } from './ImageDrawer';
import { IconDrawer } from './IconDrawer';
import { ListDrawer } from './ListDrawer';
import {
  PersonalDataDescribable,
  PersonalDataValue,
} from '../../../model/personal-data.model';

interface ElementDrawerProps {
  element: Element;
  data: PersonalDataValue;
}

export function ElementDrawer(props: ElementDrawerProps) {
  switch (props.element.type) {
    case ElementType.TEXT:
      return (
        <TextDrawer
          element={props.element as TextElement}
          data={props.data as string}
        />
      );
    case ElementType.IMAGE:
      return (
        <ImageDrawer
          element={props.element as ImageElement}
          data={props.data as string}
        />
      );
    case ElementType.ICON:
      return (
        <IconDrawer
          element={props.element as IconElement}
          data={props.data as string}
        />
      );
    case ElementType.LIST:
      return (
        <ListDrawer
          element={props.element as ListElement}
          data={props.data as PersonalDataDescribable[]}
        />
      );
    default:
      return <></>;
  }
}
