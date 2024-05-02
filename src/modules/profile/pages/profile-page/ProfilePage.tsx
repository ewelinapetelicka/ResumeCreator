import { Button, Flex, useDisclosure, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUser,
  setUserPersonalData,
} from '../../../../store/user/user.slice';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client';
import { useState } from 'react';
import { DeleteAccountDialog } from '../../dialogs/delete-account-dialog/DeleteAccountDialog';
import { PersonalData } from '../../../../model/personal-data.model';
import { UserAvatar } from '../../../../components/user-avatar/UserAvatar';
import { PersonalDataEditor } from '../../../../components/personal-data-editor/PersonalDataEditor';

export function ProfilePage() {
  const dispatch = useDispatch();
  const toast = useToast();
  const user = useSelector(selectUser);
  const http = useHttpClient();
  const [personalDataForm, setPersonalDataForm] = useState<PersonalData>(
    structuredClone(user.personalData),
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  function saveChangesPersonalData() {
    http
      .patch('users/' + user.id, {
        personalData: {
          ...personalDataForm,
          updateDate: new Date().toISOString(),
        },
      })
      .then(() => {
        dispatch(setUserPersonalData(personalDataForm));
        toast({
          title: 'Success',
          description: 'Your profile has been changed!',
          status: 'success',
          duration: 5000,
          position: 'top-right',
          isClosable: true,
        });
      });
  }

  return (
    <>
      <Flex
        w={'100%'}
        minH={'calc(100vh - 87px)'}
        justifyContent={'center'}
        alignItems={'center'}
        p={'20px'}>
        <Flex
          w={'60%'}
          minWidth={'600px'}
          boxShadow={'0px 1px 4px #e1e1e1'}
          borderRadius={'30px'}
          bg={'white'}
          alignItems={'center'}
          gap={'30px'}
          justifyContent={'center'}
          flexDirection={'column'}
          p={'20px 60px'}>
          <UserAvatar user={user} />
          <PersonalDataEditor
            personalData={personalDataForm}
            onChange={(change) => setPersonalDataForm(change)}
          />
          <Flex gap={'200px'} pt={'10px'}>
            <Button color={'red'} variant={'link'} onClick={onOpen}>
              REMOVE ACCOUNT
            </Button>
            <Button onClick={() => saveChangesPersonalData()}>SAVE</Button>
          </Flex>
        </Flex>
      </Flex>
      <DeleteAccountDialog open={isOpen} close={onClose} />
    </>
  );
}
