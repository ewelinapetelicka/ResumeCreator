import { Box, Flex } from '@chakra-ui/react';
import { A4 } from '../../../../const/a4.const.ts';
import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer.tsx';
import { Resume } from '../../../../model/resume.model.ts';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTemplateById } from '../../../../store/template/templates.slice.ts';

interface ResumeCardProps {
  resume: Resume;
}

export function ResumeCard(props: ResumeCardProps) {
  const navigate = useNavigate();
  const template = useSelector(
    selectTemplateById(props.resume.templateId || -1),
  );

  if (!template) {
    return <></>;
  }
  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}>
      <Box
        w={A4.width / 2}
        h={A4.height / 2}
        bgColor={'white'}
        borderRadius={'20px'}
        onClick={() => navigate(template.id.toString())}
        cursor={'pointer'}
        overflow={'hidden'}
        boxShadow={'#e9e9e9 0px 0px 15px 5px'}
        transition={'0.1s'}
        _hover={{
          transform: 'scale(1.02)',
        }}>
        <TemplateDrawer
          template={template}
          dimension={A4}
          data={props.resume.personalData}
          scale={0.5}
          variant={props.resume.colorVariant}
        />
      </Box>
    </Flex>
  );
}
