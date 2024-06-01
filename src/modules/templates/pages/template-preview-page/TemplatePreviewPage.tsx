import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { selectTemplateById } from '../../../../store/template/templates.slice';
import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch';
import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react';
import { A4 } from '../../../../const/a4.const';
import { TemplatePreviewActions } from '../../components/template-preview-actions/TemplatePreviewActions';
import { useRef, useState } from 'react';
import { defaultPersonalDataConst } from '../../const/default-personal-data.const';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client.ts';
import {
  selectIsUserLogged,
  selectUser,
} from '../../../../store/user/user.slice.ts';
import { Resume } from '../../../../model/resume.model.ts';
import { addResume } from '../../../../store/resume/resumes.slice.ts';

export function TemplatePreviewPage() {
  const params = useParams();
  const template = useSelector(selectTemplateById(parseInt(params.id!)));
  const reactZoomPanPinchContentRef = useRef<ReactZoomPanPinchContentRef>(null);
  const [variant, setVariant] = useState(template?.colorVariants[0] || '');
  const http = useHttpClient();
  const isLogged = useSelector(selectIsUserLogged);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  if (!template) {
    return <Navigate to={'/404'} />;
  }

  function resetPosition() {
    reactZoomPanPinchContentRef.current!.centerView(0.7);
  }

  function createResume() {
    http
      .post<Resume>('resumes', {
        personalData: user.personalData,
        name: template?.name,
        templateId: template?.id,
        userId: user.id,
      })
      .then((resume) => {
        dispatch(addResume(resume));
        navigate('/resumes/' + resume.id);
        toast({
          title: 'Success',
          description:
            'Your resume has been created! Now you can personalize your resume, without changing your profile data.',
          status: 'success',
          duration: 5000,
          position: 'top-right',
          isClosable: true,
        });
      });
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
                onClick={() => setVariant(color)}
                key={color}
                bgColor={color}
                variant={
                  variant === color ? 'selectedColor' : 'color'
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
            variant={variant}
          />
        </TransformComponent>
      </TransformWrapper>
      <Button
        position={'absolute'}
        bottom={'0px'}
        right={'20px'}
        onClick={() => createResume()}
        isDisabled={!isLogged}>
        CREATE RESUME
      </Button>
    </Box>
  );
}
