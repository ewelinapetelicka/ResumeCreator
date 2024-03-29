import {
  BoxElement,
  ElementType,
  ImageElement,
  Template,
  TextElement,
} from '../../model/template.model';
import { Box } from '@chakra-ui/react';
import { BoxDrawer } from './elements/BoxDrawer';
import { TextDrawer } from './elements/TextDrawer';
import { DimensionPixel } from '../../model/size.model';
import { PersonalData } from '../../model/personal-data.model';
import { TemplateUtils } from '../../utils/template-utils';
import { useEffect } from 'react';
import { ImageDrawer } from './elements/ImageDrawer';

interface TemplateDrawerProps {
  template: Template;
  dimension: DimensionPixel;
  data: PersonalData;
  scale?: number;
}

export function TemplateDrawer(props: TemplateDrawerProps) {
  useEffect(() => {
    TemplateUtils.registerFonts(props.template);
  }, []);

  return (
    <Box
      w={props.dimension.width}
      h={props.dimension.height}
      bg={'white'}
      position={'relative'}
      transform={`scale(${props.scale || 1})`}
      transformOrigin={'top left'}>
      {props.template.elements.map((element, i) => {
        switch (element.type) {
          case ElementType.BOX:
            return <BoxDrawer element={element as BoxElement} key={i} />;
          case ElementType.TEXT:
            return (
              <TextDrawer
                element={element as TextElement}
                data={props.data}
                key={i}
              />
            );
          case ElementType.IMAGE:
            return (
              <ImageDrawer
                element={element as ImageElement}
                data={props.data}
                key={i}
              />
            );
          default:
            return <></>;
        }
      })}
    </Box>
  );
}
