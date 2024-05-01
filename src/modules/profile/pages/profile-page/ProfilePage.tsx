import {
  Box,
  Button,
  Flex,
  Input,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { CustomAvatar } from '../../../../components/custom-avatar/CustomAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectUser, setUser } from '../../../../store/user/user.slice';
import { AreaWithLabel } from '../../../../components/area-with-label/AreaWithLabel';
import { PersonalDataDescribableEditor } from '../../../../components/accordion-element/AccordionElement';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client';
import { useState } from 'react';
import { User } from '../../../../model/user.model';
import { ModalWindow } from '../../dialogs/modal-window/ModalWindow';
import { useNavigate } from 'react-router-dom';

export function ProfilePage() {
  const user = useSelector(selectUser);
  const http = useHttpClient();
  const [editedUser, setEditedUser] = useState<User>(structuredClone(user));
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  function saveChangesPersonalData() {
    http.patch('users/' + user.id, editedUser).then(() => {
      dispatch(setUser(editedUser));
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
    <>
      <Box
        w={'100%'}
        minH={'calc(100vh - 87px)'}
        bg={'gray.100'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        p={'20px'}>
        <Flex
          w={'60%'}
          boxShadow={'0px 1px 4px #e1e1e1'}
          borderRadius={'30px'}
          bg={'white'}
          alignItems={'center'}
          gap={'30px'}
          justifyContent={'center'}
          p={'20px'}>
          <Flex
            alignItems={'center'}
            flexDirection={'column'}
            w={'80%'}
            justifyContent={'start'}>
            <CustomAvatar user={user} />
            <Flex w={'100%'} flexDirection={'column'} gap={'10px'}>
              <AreaWithLabel label={'Avatar:'}>
                <Input
                  value={editedUser.personalPhoto}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      personalPhoto: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'NAME:'}>
                <Input
                  value={editedUser.name}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      name: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'SURNAME:'}>
                <Input
                  value={editedUser.surname}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      surname: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'FULL NAME:'}>
                <Input
                  value={editedUser.fullName}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      fullName: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'EMAIL:'}>
                <Input
                  value={editedUser.email}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      email: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'ROLE:'}>
                <Input
                  value={editedUser.role}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      role: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'PHONE NUMBER:'}>
                <Input
                  value={editedUser.phone}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      phone: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'GITHUB:'}>
                <Input
                  value={editedUser.github}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      github: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'LINKEDIN:'}>
                <Input
                  value={editedUser.linkedin}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      linkedin: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'ABOUT ME:'}>
                <Textarea
                  value={editedUser.aboutMe}
                  onChange={(event) =>
                    setEditedUser({
                      ...editedUser,
                      aboutMe: event.target.value,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'certifications:'}>
                <PersonalDataDescribableEditor
                  elements={editedUser.certifications}
                  onPersonalDataChange={(change) =>
                    setEditedUser({
                      ...editedUser,
                      certifications: change,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'education:'}>
                <PersonalDataDescribableEditor
                  elements={editedUser.education}
                  onPersonalDataChange={(change) =>
                    setEditedUser({
                      ...editedUser,
                      education: change,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'work experience:'}>
                <PersonalDataDescribableEditor
                  elements={editedUser.workExperience}
                  onPersonalDataChange={(change) =>
                    setEditedUser({
                      ...editedUser,
                      workExperience: change,
                    })
                  }
                />
              </AreaWithLabel>
              <AreaWithLabel label={'skills:'}>
                {editedUser.skills.map((el, index) => {
                  return (
                    <Input
                      value={el.name}
                      key={index}
                      onChange={(event) =>
                        setEditedUser({
                          ...editedUser,
                          skills: editedUser.skills.map((e, i) => {
                            if (i === index) {
                              return { ...e, name: event.target.value };
                            }
                            return e;
                          }),
                        })
                      }
                    />
                  );
                })}
              </AreaWithLabel>
              <AreaWithLabel label={'hobbies:'}>
                {editedUser.hobbies.map((el, index) => {
                  return (
                    <Input
                      value={el.name}
                      key={index}
                      onChange={(event) =>
                        setEditedUser({
                          ...editedUser,
                          hobbies: editedUser.hobbies.map((e, i) => {
                            if (i === index) {
                              return { ...e, name: event.target.value };
                            }
                            return e;
                          }),
                        })
                      }
                    />
                  );
                })}
              </AreaWithLabel>
            </Flex>
            <Flex gap={'200px'} pt={'10px'}>
              <Button color={'red'} variant={'link'} onClick={onOpen}>
                REMOVE ACCOUNT
              </Button>
              <Button onClick={() => saveChangesPersonalData()}>SAVE</Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <ModalWindow
        open={isOpen}
        close={onClose}
        deleteConfirm={() => deleteProfile()}
      />
    </>
  );
}
