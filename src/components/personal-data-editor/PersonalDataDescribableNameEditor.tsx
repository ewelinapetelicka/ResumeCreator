import {
  PersonalDataDescribable,
  PersonalDataField,
} from '../../model/personal-data.model';
import { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import { IoMdTrash } from 'react-icons/io';

interface PersonalDataDescribableNameEditorProps {
  personalDataDescribable: PersonalDataDescribable[];
  onChange: (change: PersonalDataDescribable[]) => void;
}

export function PersonalDataDescribableNameEditor(
  props: PersonalDataDescribableNameEditorProps,
) {
  const [personalDataDescribableNameForm, setPersonalDataDescribableNameForm] =
    useState<PersonalDataDescribable[]>(
      structuredClone(props.personalDataDescribable),
    );

  function updatePersonalDataDescribableForm(
    field: PersonalDataField,
    index: number,
    data: string,
  ) {
    const edited = personalDataDescribableNameForm.map((el, i) =>
      i === index ? { ...el, [field]: data } : el,
    );
    setPersonalDataDescribableNameForm(edited);
    props.onChange(edited);
  }

  function addPersonalDataDescribableFormElement() {
    setPersonalDataDescribableNameForm([
      ...personalDataDescribableNameForm,
      { name: '' },
    ]);
  }

  function removePersonalDataDescribableFormElement(index: number) {
    setPersonalDataDescribableNameForm(
      personalDataDescribableNameForm.filter((_, i) => index !== i),
    );
  }

  return (
    <>
      {personalDataDescribableNameForm.map((el, index) => (
        <Flex key={index}>
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
          <Button
            colorScheme={'red'}
            variant={'ghost'}
            onClick={() => removePersonalDataDescribableFormElement(index)}>
            <IoMdTrash />
          </Button>
        </Flex>
      ))}
      <Button onClick={() => addPersonalDataDescribableFormElement()}>
        ADD NEW
      </Button>
    </>
  );
}
