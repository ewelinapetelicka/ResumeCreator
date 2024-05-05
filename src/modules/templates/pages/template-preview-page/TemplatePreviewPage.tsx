import { Navigate, useParams } from 'react-router-dom';
import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer';
import { useSelector } from 'react-redux';
import { selectTemplateById } from '../../../../store/template/templates.slice';
import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { A4 } from '../../../../const/a4.const';
import { TemplatePreviewActions } from '../../components/template-preview-actions/TemplatePreviewActions';
import React, { useEffect, useRef, useState } from 'react';
import { defaultPersonalDataConst } from '../../const/default-personal-data.const';

export function TemplatePreviewPage() {
  const params = useParams();
  const template = useSelector(selectTemplateById(parseInt(params.id!)));
  const reactZoomPanPinchContentRef = useRef<ReactZoomPanPinchContentRef>(null);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (template) {
      setSelectedColor(template.colorVariants[0]);
    }
  }, [template]);

  if (!template) {
    return <Navigate to={'/404'} />;
  }

  function resetPosition() {
    reactZoomPanPinchContentRef.current!.centerView(0.7);
  }

  return (
    <Box
      w={'calc(100% - 40px)'}
      h={'calc(100% - 60px)'}
      m={'20px'}
      position={'relative'}>
      <Flex
        gap={'10px'}
        alignItems={'center'}
        w={'100%'}
        justifyContent={'space-between'}>
        <Flex>
          <Text fontSize={'2xl'} fontWeight={'bold'} pr={'50px'}>
            {template.name}
          </Text>
          {template.tags.map((tag) => {
            return (
              <Button
                colorScheme="gray"
                bg={'transparent'}
                variant={'badge'}
                key={tag}>
                {tag}
              </Button>
            );
          })}
          <TemplatePreviewActions onResetPosition={() => resetPosition()} />
        </Flex>
        <Flex mr={'100px'} gap={'20px'}>
          {template.colorVariants?.map((color) => {
            return (
              <Button
                onClick={() => setSelectedColor(color)}
                bgColor={color}
                variant={
                  selectedColor === color ? 'selectedColor' : 'color'
                }></Button>
            );
          })}
        </Flex>
      </Flex>
      <TransformWrapper
        ref={reactZoomPanPinchContentRef}
        limitToBounds={false}
        centerOnInit
        minScale={0.1}
        maxScale={5}
        initialScale={0.7}>
        <TransformComponent
          wrapperStyle={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            cursor: 'grab',
          }}
          contentStyle={{ boxShadow: '#e9e9e9 0px 0px 15px 5px' }}>
          <TemplateDrawer
            template={template}
            dimension={A4}
            data={defaultPersonalDataConst}
            variant={selectedColor}
          />
        </TransformComponent>
      </TransformWrapper>
    </Box>
  );
}
