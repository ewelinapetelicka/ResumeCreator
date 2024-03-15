import {
  BoxElement,
  ElementType,
  Template,
  TextElement,
} from '../../model/template.model';
import { Box, Flex } from '@chakra-ui/react';
import { BoxDrawer } from './elements/BoxDrawer';
import { TextDrawer } from './elements/TextDrawer';

interface TemplateDrawerProps {
  template: Template;
}

export function TemplateDrawer(props: TemplateDrawerProps) {
  return (
    <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'} p={'20px'}>
      <Box w={'600px'} h={'850px'} bg={'white'} position={'relative'}>
        {props.template.elements.map((element, i) => {
          switch (element.type) {
            case ElementType.BOX:
              return <BoxDrawer element={element as BoxElement} />;
            case ElementType.TEXT:
              return <TextDrawer element={element as TextElement} />;
            default:
              return <></>;
          }
        })}
      </Box>
    </Flex>
  );
}
