import {
  Element,
  ElementType,
  IconElement,
  ImageElement,
  TextElement,
} from '../../../model/template.model';
import { TextDrawer } from './TextDrawer';
import { ImageDrawer } from './ImageDrawer';
import { IconDrawer } from './IconDrawer';

interface ElementDrawerProps {
  element: Element;
  data: string;
}

export function ElementDrawer(props: ElementDrawerProps) {
  switch (props.element.type) {
    case ElementType.TEXT:
      return (
        <TextDrawer element={props.element as TextElement} data={props.data} />
      );
    case ElementType.IMAGE:
      return (
        <ImageDrawer
          element={props.element as ImageElement}
          data={props.data}
        />
      );
    case ElementType.ICON:
      return (
        <IconDrawer element={props.element as IconElement} data={props.data} />
      );
    default:
      return <></>;
  }
}
