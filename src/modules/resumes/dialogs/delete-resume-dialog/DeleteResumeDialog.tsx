import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client.ts';
import { useDispatch } from 'react-redux';
import { removeResume } from '../../../../store/resume/resumes.slice.ts';

interface DeleteResumeDialogProps {
  open: boolean;
  close: () => void;
  id: number;
}
export function DeleteResumeDialog(props: DeleteResumeDialogProps) {
  const navigate = useNavigate();
  const http = useHttpClient();
  const toast = useToast();
  const dispatch = useDispatch();

  function deleteResume() {
    http.delete('resumes/' + props.id).then(() => {
      dispatch(removeResume(props.id));
      toast({
        title: 'Success',
        description: 'Resume has been deleted!',
        status: 'success',
        duration: 5000,
        position: 'top-right',
        isClosable: true,
      });
      navigate('/resumes');
    });
  }

  return (
    <Modal isOpen={props.open} onClose={props.close} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Do you want delete this resume?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter alignSelf={'center'}>
          <Button
            variant={'solid'}
            color={'red'}
            onClick={() => deleteResume()}>
            DELETE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
