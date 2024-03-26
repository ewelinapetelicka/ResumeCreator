import { ImageElement } from '../../../model/template.model';
import { Image } from '@chakra-ui/react';
import { PersonalData } from '../../../model/personal-data.model';

interface ImageDrawerProps {
  element: ImageElement;
  data: PersonalData;
}

export function ImageDrawer(props: ImageDrawerProps) {
  return (
    <Image
      position={'absolute'}
      top={props.element.position.top + '%'}
      left={props.element.position.left + '%'}
      src={props.data[props.element.personalDataField]}
      borderRadius={props.element.style.borderRadius}
      w={props.element.dimension.width + 'px'}
      h={props.element.dimension.height + 'px'}
      alt="Dan Abramov"></Image>
  );
}
