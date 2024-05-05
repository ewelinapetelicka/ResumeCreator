import { Template } from '../../model/template.model';
import { Box } from '@chakra-ui/react';
import { DimensionPixel } from '../../model/size.model';
import { PersonalData } from '../../model/personal-data.model';
import { TemplateUtils } from '../../utils/template/template.utils';
import { useEffect, useState } from 'react';
import { LayoutDrawer } from './LayoutDrawer';

interface TemplateDrawerProps {
  template: Template;
  dimension: DimensionPixel;
  data: PersonalData;
  variant?: string;
  scale?: number;
}

export function TemplateDrawer(props: TemplateDrawerProps) {
  const [variant, setVariant] = useState({
    '--template-variant': props.variant || props.template.colorVariants[0],
  });

  useEffect(() => {
    TemplateUtils.registerFonts(props.template);
  }, []);

  useEffect(() => {
    setVariant({
      '--template-variant': props.variant || props.template.colorVariants[0],
    });
  }, [props.variant]);

  return (
    <Box
      w={props.dimension.width}
      h={props.dimension.height}
      style={{ ...props.template.style, ...variant }}
      position={'relative'}
      transform={`scale(${props.scale || 1})`}
      transformOrigin={'top left'}>
      {props.template.layouts.map((layout, i) => (
        <LayoutDrawer layout={layout} data={props.data} key={i} />
      ))}
    </Box>
  );
}
