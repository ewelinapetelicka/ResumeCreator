import {
  Box,
  Button,
  Flex,
  Tooltip,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectResumeById } from '../../../../store/resume/resumes.slice';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from 'react-zoom-pan-pinch';
import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer';
import { A4 } from '../../../../const/a4.const';
import { useRef, useState } from 'react';
import { selectTemplateById } from '../../../../store/template/templates.slice';
import { PersonalDataEditor } from '../../../../components/personal-data-editor/PersonalDataEditor';
import { PersonalData } from '../../../../model/personal-data.model';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { DeleteResumeDialog } from '../../dialogs/delete-resume-dialog/DeleteResumeDialog.tsx';

export function ResumePreviewPage() {
  const params = useParams();
  const location = useLocation();
  const toast = useToast();
  const http = useHttpClient();
  const resume = useSelector(selectResumeById(parseInt(params.id!)));
  const reactZoomPanPinchContentRef = useRef<ReactZoomPanPinchContentRef>(null);
  const template = useSelector(selectTemplateById(resume?.templateId || -1));
  const [resumeDataForm, setResumeDataForm] = useState<PersonalData>(
    structuredClone(resume!.personalData),
  );
  const [canDownload, setCanDownload] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [variant, setVariant] = useState(template?.colorVariants[0] || '');

  if (!resume || !template) {
    return <Navigate to={'/404'} />;
  }

  async function saveResumeDataForm() {
    http
      .patch('resumes/' + resume?.id, {
        personalData: {
          ...resumeDataForm,
          updateDate: new Date().toISOString(),
        },
        colorVariant: variant,
      })
      .then(() => {
        toast({
          title: 'Success',
          description: 'Your resume has been changed!',
          status: 'success',
          duration: 5000,
          position: 'top-right',
          isClosable: true,
        });
        setCanDownload(true);
      });
  }

  function downloadResume() {
    http
      .patch('resumes/' + resume?.id, {
        personalData: resumeDataForm,
      })
      .then(() => window.open(location.pathname + '/print', '_blank'));
  }

  function updateResumeDataForm(change: PersonalData) {
    setResumeDataForm(change);
    setCanDownload(false);
  }

  return (
    <Box
      w={'calc(100% - 40px)'}
      h={'calc(100% - 40px)'}
      m={'20px'}
      position={'relative'}>
      <Flex h={'100%'}>
        <Box
          w={'50%'}
          h={'100%'}
          minWidth={'600px'}
          boxShadow={'0px 1px 4px #e1e1e1'}
          borderRadius={'30px'}
          bg={'white'}
          alignItems={'center'}
          gap={'30px'}
          justifyContent={'center'}
          flexDirection={'column'}
          p={'20px'}
          overflowY={'scroll'}>
          <PersonalDataEditor
            personalData={resumeDataForm}
            onChange={(change) => updateResumeDataForm(change)}
          />
        </Box>
        <TransformWrapper
          ref={reactZoomPanPinchContentRef}
          limitToBounds={false}
          centerOnInit
          minScale={0.1}
          maxScale={5}
          initialScale={0.9}>
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
              data={resumeDataForm}
              variant={variant}
            />
          </TransformComponent>
        </TransformWrapper>
      </Flex>
      <Flex
        position={'absolute'}
        right={'20px'}
        top={'0px'}
        alignItems={'center'}
        gap={'20px'}>
        <Flex gap={'20px'}>
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
        <Button colorScheme={'red'} variant={'ghost'} onClick={() => onOpen()}>
          DELETE
        </Button>
      </Flex>
      <Flex position={'absolute'} right={'20px'} bottom={'0px'} gap={'20px'}>
        <Button onClick={() => saveResumeDataForm()}>SAVE</Button>
        <Tooltip
          label={
            canDownload
              ? undefined
              : 'You have made changes to your resume that have not yet been saved. Please save your changes before downloading.'
          }
          placement={'left'}>
          <Button isDisabled={!canDownload} onClick={() => downloadResume()}>
            DOWNLOAD
            <AiOutlineArrowDown />
          </Button>
        </Tooltip>
      </Flex>
      <DeleteResumeDialog open={isOpen} close={onClose} id={resume.id} />
    </Box>
  );
}
