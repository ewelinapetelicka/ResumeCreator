import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  PersonalDataDescribable,
  PersonalDataField,
} from '../../model/personal-data.model';
import { useState } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { IconContext } from 'react-icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface PersonalDataDescribableEditorProps {
  personalDataDescribable: PersonalDataDescribable[];
  onChange: (change: PersonalDataDescribable[]) => void;
}

export function PersonalDataDescribableEditor(
  props: PersonalDataDescribableEditorProps,
) {
  const [personalDataDescribableForm, setPersonalDataDescribableForm] =
    useState<PersonalDataDescribable[]>(
      structuredClone(props.personalDataDescribable),
    );

  function updatePersonalDataDescribableForm(
    field: PersonalDataField,
    index: number,
    data: string,
  ) {
    const edited = personalDataDescribableForm.map((el, i) =>
      i === index ? { ...el, [field]: data } : el,
    );
    setPersonalDataDescribableForm(edited);
    props.onChange(edited);
  }

  function addPersonalDataDescribableFormElement() {
    const edited = [
      ...personalDataDescribableForm,
      { name: '', company: '', time: '', description: '' },
    ];
    setPersonalDataDescribableForm(edited);
    props.onChange(edited);
  }

  function removePersonalDataDescribableFormElement(index: number) {
    const edited = personalDataDescribableForm.filter((_, i) => index !== i);
    setPersonalDataDescribableForm(edited);
    props.onChange(edited);
  }

  function swapPositions(index1: number, index2: number) {
    const edited = structuredClone(personalDataDescribableForm);
    const tmp = edited[index1];
    edited[index1] = edited[index2];
    edited[index2] = tmp;

    setPersonalDataDescribableForm(edited);
    props.onChange(edited);
  }

  return (
    <>
      <Accordion allowMultiple w={'100%'}>
        {personalDataDescribableForm.map((el, index) => (
          <AccordionItem key={index}>
            <Flex gap="8px">
              <AccordionButton>
                <Flex
                  as="span"
                  flex="1"
                  textAlign="left"
                  alignItems={'center'}
                  gap={'4px'}>
                  <Flex flexDirection={'column'}>
                    {index === 0 || (
                      <>
                        <Button
                          size="xs"
                          variant="ghost"
                          onClick={(event) => {
                            event.stopPropagation();
                            swapPositions(index, index - 1);
                          }}>
                          <IconContext.Provider value={{ color: '#4a5568' }}>
                            <FaChevronUp />
                          </IconContext.Provider>
                        </Button>
                      </>
                    )}
                    {index === personalDataDescribableForm.length - 1 || (
                      <>
                        <Button
                          size="xs"
                          variant="ghost"
                          onClick={(event) => {
                            event.stopPropagation();
                            swapPositions(index, index + 1);
                          }}>
                          <IconContext.Provider value={{ color: '#4a5568' }}>
                            <FaChevronDown />
                          </IconContext.Provider>
                        </Button>
                      </>
                    )}
                  </Flex>
                  <Text>{el.name}</Text>
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <Button
                colorScheme={'red'}
                variant={'ghost'}
                onClick={() => removePersonalDataDescribableFormElement(index)}>
                <IoMdTrash />
              </Button>
            </Flex>
            <AccordionPanel pb={4}>
              <Text variant={'label'}>Name</Text>
              <Input
                value={el.name}
                onChange={(event) =>
                  updatePersonalDataDescribableForm(
                    'name',
                    index,
                    event.target.value,
                  )
                }
              />
              <Text variant={'label'}>Time</Text>
              <Input
                value={el.time}
                onChange={(event) => {
                  updatePersonalDataDescribableForm(
                    'time',
                    index,
                    event.target.value,
                  );
                }}
              />
              <Text variant={'label'}>Company</Text>
              <Input
                value={el.company}
                onChange={(event) => {
                  updatePersonalDataDescribableForm(
                    'company',
                    index,
                    event.target.value,
                  );
                }}
              />
              <Text variant={'label'}>Description</Text>
              <Input
                value={el.description}
                onChange={(event) => {
                  updatePersonalDataDescribableForm(
                    'description',
                    index,
                    event.target.value,
                  );
                }}
              />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Button onClick={() => addPersonalDataDescribableFormElement()}>
        ADD NEW
      </Button>
    </>
  );
}
