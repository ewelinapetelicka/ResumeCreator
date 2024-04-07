import { Template } from '../../model/template.model';
import { Box } from '@chakra-ui/react';
import { DimensionPixel } from '../../model/size.model';
import { PersonalData } from '../../model/personal-data.model';
import { TemplateUtils } from '../../utils/template-utils';
import { useEffect } from 'react';
import { LayoutDrawer } from './LayoutDrawer';

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
      style={props.template.style}
      position={'relative'}
      transform={`scale(${props.scale || 1})`}
      transformOrigin={'top left'}
    >
      {props.template.layouts.map((layout, i) => (
        <LayoutDrawer layout={layout} data={props.data} key={i} />
      ))}
    </Box>
  );
}
