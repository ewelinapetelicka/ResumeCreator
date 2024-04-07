import { Navigate, useParams } from 'react-router-dom';
import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer';
import { useSelector } from 'react-redux';
import { selectTemplateById } from '../../../../store/template/templates.slice';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { Box } from '@chakra-ui/react';
import { A4 } from '../../../../const/a4.const';
import { defaultPersonalDataConst } from '../../const/default-personal-data.const';

export function TemplatePreviewPage() {
  const params = useParams();
  const template = useSelector(selectTemplateById(parseInt(params.id!)));

  if (!template) {
    return <Navigate to={'/404'} />;
  }

  return (
    <Box w={'100%'} h={'100%'} p={'20px'}>
      <TransformWrapper
        limitToBounds={false}
        centerOnInit
        minScale={0.1}
        maxScale={5}
        initialScale={0.7}
      >
        <TransformComponent
          wrapperStyle={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            cursor: 'grab',
          }}
          contentStyle={{ boxShadow: '#e9e9e9 0px 0px 15px 5px' }}
        >
          <TemplateDrawer
            template={template}
            dimension={A4}
            data={defaultPersonalDataConst}
          />
        </TransformComponent>
      </TransformWrapper>
    </Box>
  );
}
