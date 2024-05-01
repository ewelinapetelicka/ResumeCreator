import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react';
import {
  PersonalDataDescribable,
  PersonalDataField,
} from '../../model/personal-data.model';
import { useEffect, useState } from 'react';
import { IoMdTrash } from 'react-icons/io';

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

  useEffect(
    () => props.onChange(personalDataDescribableForm),
    [personalDataDescribableForm],
  );

  function updatePersonalDataDescribableForm(
    field: PersonalDataField,
    index: number,
    data: string,
  ) {
    setPersonalDataDescribableForm(
      personalDataDescribableForm.map((el, i) =>
        i === index ? { ...el, [field]: data } : el,
      ),
    );
  }

  function addPersonalDataDescribableFormElement() {
    setPersonalDataDescribableForm([
      ...personalDataDescribableForm,
      { name: '', company: '', time: '', description: '' },
    ]);
  }

  function removePersonalDataDescribableFormElement(index: number) {
    setPersonalDataDescribableForm(
      personalDataDescribableForm.filter((el, i) => index !== i),
    );
  }

  return (
    <>
      <Accordion allowMultiple w={'100%'}>
        {personalDataDescribableForm.map((el, index) => (
          <AccordionItem key={index}>
            <Flex gap="8px">
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text>{el.name}</Text>
                </Box>
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
