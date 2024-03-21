import { BoxElement } from '../../../model/template.model';
import { Box } from '@chakra-ui/react';

interface BoxDrawerProps {
  element: BoxElement;
}

export function BoxDrawer(props: BoxDrawerProps) {
  return (
    <Box
      position={'absolute'}
      top={props.element.position.top + '%'}
      left={props.element.position.left + '%'}
      w={props.element.dimension.width + '%'}
      h={props.element.dimension.height + '%'}
      bg={props.element.style.bg}
      borderRadius={props.element.style.borderRadius}></Box>
  );
}
