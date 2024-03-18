import {
  BoxElement,
  ElementType,
  Template,
  TextElement,
} from '../../model/template.model';
import { Box } from '@chakra-ui/react';
import { BoxDrawer } from './elements/BoxDrawer';
import { TextDrawer } from './elements/TextDrawer';
import { Dimension } from '../../model/size.model';

interface TemplateDrawerProps {
  template: Template;
  dimension: Dimension;
}

export function TemplateDrawer(props: TemplateDrawerProps) {
  return (
    <Box
      w={props.dimension.width}
      h={props.dimension.height}
      bg={'white'}
      position={'relative'}>
      {props.template.elements.map((element, i) => {
        switch (element.type) {
          case ElementType.BOX:
            return <BoxDrawer element={element as BoxElement} key={i} />;
          case ElementType.TEXT:
            return <TextDrawer element={element as TextElement} key={i} />;
          default:
            return <></>;
        }
      })}
    </Box>
  );
}
