import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { logOut, selectUser } from '../../../../store/user/user.slice';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client';
import { useDispatch, useSelector } from 'react-redux';

interface DeleteAccountDialogProps {
  open: boolean;
  close: () => void;
}
export function DeleteAccountDialog(props: DeleteAccountDialogProps) {
  const navigate = useNavigate();
  const http = useHttpClient();
  const dispatch = useDispatch();
  const toast = useToast();
  const user = useSelector(selectUser);

  function deleteProfile() {
    http.delete('users/' + user.id).then(() => {
      dispatch(logOut());
      toast({
        title: 'Success',
        description: 'Your profile has been deleted!',
        status: 'success',
        duration: 5000,
        position: 'top-right',
        isClosable: true,
      });
      navigate('templates');
    });
  }

  return (
    <Modal isOpen={props.open} onClose={props.close}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Do you want delete this account?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Are you sure you want to delete your account? This action is
            irreversible, and all your data associated with this account will be
            permanently removed. Please confirm your decision by clicking the
            button below.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant={'solid'}
            color={'red'}
            onClick={() => deleteProfile()}>
            Remove Account
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
