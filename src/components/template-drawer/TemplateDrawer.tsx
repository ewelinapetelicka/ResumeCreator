import {
  BoxElement,
  ElementType,
  Template,
  TextElement,
} from '../../model/template.model';
import { Box, Flex } from '@chakra-ui/react';
import { BoxDrawer } from './elements/BoxDrawer';
import { TextDrawer } from './elements/TextDrawer';
import { useEffect, useRef, useState } from 'react';

interface TemplateDrawerProps {
  template: Template;
}

export function TemplateDrawer(props: TemplateDrawerProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref && ref.current) {
      setWidth(ref.current.clientHeight * 0.7);
    }
  }, [ref]);

  return (
    <Flex w={'100%'} h={'100%'} align={'center'} justify={'center'} p={'20px'}>
      <Box
        w={width + 'px'}
        h={'100%'}
        ref={ref}
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
    </Flex>
  );
}
