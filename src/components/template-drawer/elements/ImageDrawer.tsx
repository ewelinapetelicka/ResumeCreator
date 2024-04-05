import { ImageElement } from '../../../model/template.model';
import { Image } from '@chakra-ui/react';

interface ImageDrawerProps {
  element: ImageElement;
  data: string;
}

export function ImageDrawer(props: ImageDrawerProps) {
  return (
    <Image
      src={props.data}
      style={props.element.style}
      alt={props.element.alt}
    />
  );
}
