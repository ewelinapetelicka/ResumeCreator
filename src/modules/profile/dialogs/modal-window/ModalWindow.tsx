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
} from '@chakra-ui/react';
import React from 'react';

interface ModalWindowProps {
  open: boolean;
  close: () => void;
  deleteConfirm: () => void;
}
export function ModalWindow(props: ModalWindowProps) {
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
          <Button variant={'solid'} color={'red'} onClick={props.deleteConfirm}>
            Remove Account
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
