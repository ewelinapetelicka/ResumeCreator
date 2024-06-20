import {
  Box,
  Button,
  Flex,
  IconButton,
  Tooltip,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectResumeById,
  updateResume,
} from '../../../../store/resume/resumes.slice';
import { Navigate, useBlocker, useLocation, useParams } from 'react-router-dom';
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
import { Resume } from '../../../../model/resume.model.ts';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { selectUser } from '../../../../store/user/user.slice.ts';
import { LuRefreshCw } from 'react-icons/lu';

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
  const [variant, setVariant] = useState(
    resume?.colorVariant || template?.colorVariants[0] || '',
  );
  const [favorite, setFavorite] = useState(resume?.isFavorite);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [personalData, setPersonalData] = useState(resumeDataForm);

  useBlocker(() => {
    if (!canDownload) {
      return !confirm('Are you sure?');
    }
    return false;
  });

  if (!resume || !template) {
    return <Navigate to={'/404'} />;
  }

  async function saveResumeDataForm() {
    http
      .patch<Resume>('resumes/' + resume?.id, {
        personalData: {
          ...personalData,
          updateDate: new Date().toISOString(),
        },
        colorVariant: variant,
        isFavorite: favorite,
      })
      .then((updatedResume) => {
        dispatch(updateResume(updatedResume));
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

  function updateResumeColorVariant(change: string) {
    setVariant(change);
    setCanDownload(false);
  }

  function updateResumeIsFavorite(change: boolean) {
    setFavorite(change);
    setCanDownload(false);
  }

  function synchronizeWithProfile() {
    if (
      new Date(user.personalData.updateDate).getTime() >
      new Date(personalData.updateDate).getTime()
    ) {
      setPersonalData(user.personalData);
      setCanDownload(false);
      toast({
        title: 'Success',
        description: 'The data has been updated',
        status: 'success',
        duration: 5000,
        position: 'top-right',
        isClosable: true,
      });
    } else {
      toast({
        title: 'Info',
        description: 'No update available',
        status: 'info',
        duration: 5000,
        position: 'top-right',
        isClosable: true,
      });
    }
  }

  return (
    <Box
      w={'calc(100% - 40px)'}
      h={'calc(100% - 40px)'}
      m={'20px'}
      position={'relative'}>
      <Flex h={'100%'}>
        <Flex
          h={'100%'}
          flexDirection={'column'}
          alignItems={'start'}
          justifyContent={'space-evenly'}>
          <Button
            onClick={() => synchronizeWithProfile()}
            display={'flex'}
            alignItems={'center'}
            gap={'5px'}>
            <LuRefreshCw />
            Sync with your profile
          </Button>
          <Box
            w={'50%'}
            h={'94%'}
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
              personalData={personalData}
              onChange={(change) => updateResumeDataForm(change)}
            />
          </Box>
        </Flex>
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
                onClick={() => updateResumeColorVariant(color)}
                key={color}
                bgColor={color}
                variant={
                  variant === color ? 'selectedColor' : 'color'
                }></Button>
            );
          })}
        </Flex>
        <IconButton
          onClick={() => updateResumeIsFavorite(!favorite)}
          aria-label="Add to favorite"
          icon={favorite ? <FaStar /> : <FaRegStar />}
        />
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
