import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Input,
} from '@chakra-ui/react';
import { PersonalDataDescribable } from '../../model/personal-data.model';
import { AreaWithLabel } from '../area-with-label/AreaWithLabel';
import { useEffect, useState } from 'react';

interface PersonalDataDescribableEditorProps {
  elements: PersonalDataDescribable[];
  onPersonalDataChange: (change: PersonalDataDescribable[]) => void;
}

export function PersonalDataDescribableEditor(
  props: PersonalDataDescribableEditorProps,
) {
  const [editedPersonalDataDescribable, setEditedPersonalDataDescribable] =
    useState<PersonalDataDescribable[]>(structuredClone(props.elements));

  useEffect(() => {
    props.onPersonalDataChange(editedPersonalDataDescribable);
  }, [editedPersonalDataDescribable]);

  return (
    <Accordion allowMultiple w={'100%'}>
      {editedPersonalDataDescribable.map((el, index) => {
        return (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text>{el.name}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <AreaWithLabel label={'NAME:'}>
                <Input
                  value={el.name}
                  onChange={(event) => {
                    setEditedPersonalDataDescribable(
                      editedPersonalDataDescribable.map((e, i) => {
                        if (i === index) {
                          return { ...e, name: event.target.value };
                        }
                        return e;
                      }),
                    );
                  }}
                />
              </AreaWithLabel>
              <AreaWithLabel label={'TIME:'}>
                <Input
                  value={el.time}
                  onChange={(event) => {
                    setEditedPersonalDataDescribable(
                      editedPersonalDataDescribable.map((e, i) => {
                        if (i === index) {
                          return { ...e, time: event.target.value };
                        }
                        return e;
                      }),
                    );
                  }}
                />
              </AreaWithLabel>
              <AreaWithLabel label={'Company'}>
                <Input
                  value={el.company}
                  onChange={(event) => {
                    setEditedPersonalDataDescribable(
                      editedPersonalDataDescribable.map((e, i) => {
                        if (i === index) {
                          return { ...e, company: event.target.value };
                        }
                        return e;
                      }),
                    );
                  }}
                />
              </AreaWithLabel>
              <AreaWithLabel label={'description'}>
                <Input
                  value={el.description}
                  onChange={(event) => {
                    setEditedPersonalDataDescribable(
                      editedPersonalDataDescribable.map((e, i) => {
                        if (i === index) {
                          return { ...e, description: event.target.value };
                        }
                        return e;
                      }),
                    );
                  }}
                />
              </AreaWithLabel>
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
