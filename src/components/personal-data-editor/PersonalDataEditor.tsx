import {
  PersonalData,
  PersonalDataField,
  PersonalDataValue,
} from '../../model/personal-data.model';
import { Flex, Input, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { PersonalDataDescribableEditor } from './PersonalDataDescribableEditor';
import { PersonalDataDescribableNameEditor } from './PersonalDataDescribableNameEditor';

interface PersonalDataEditorProps {
  personalData: PersonalData;
  onChange: (personalData: PersonalData) => void;
}

export function PersonalDataEditor(props: PersonalDataEditorProps) {
  const [personalDataForm, setPersonalDataForm] = useState<PersonalData>(
    structuredClone(props.personalData),
  );

  function updatePersonalDataForm(
    field: PersonalDataField,
    data: PersonalDataValue,
  ) {
    const edited = { ...personalDataForm, [field]: data };
    setPersonalDataForm(edited);
    props.onChange(edited);
  }

  return (
    <Flex w={'100%'} flexDirection={'column'} gap={'10px'}>
      <Text variant={'label'}>Avatar</Text>
      <Input
        value={personalDataForm.personalPhoto}
        onChange={(event) =>
          updatePersonalDataForm('personalPhoto', event.target.value)
        }
      />

      <Text variant={'label'}>Name</Text>
      <Input
        value={personalDataForm.name}
        onChange={(event) => updatePersonalDataForm('name', event.target.value)}
      />

      <Text variant={'label'}>Surname</Text>
      <Input
        value={personalDataForm.surname}
        onChange={(event) =>
          updatePersonalDataForm('surname', event.target.value)
        }
      />

      <Text variant={'label'}>Email</Text>
      <Input
        value={personalDataForm.email}
        onChange={(event) =>
          updatePersonalDataForm('email', event.target.value)
        }
      />

      <Text variant={'label'}>Role</Text>
      <Input
        value={personalDataForm.role}
        onChange={(event) => updatePersonalDataForm('role', event.target.value)}
      />

      <Text variant={'label'}>Phone number</Text>
      <Input
        value={personalDataForm.phone}
        onChange={(event) =>
          updatePersonalDataForm('phone', event.target.value)
        }
      />

      <Text variant={'label'}>Github</Text>
      <Input
        value={personalDataForm.github}
        onChange={(event) =>
          updatePersonalDataForm('github', event.target.value)
        }
      />

      <Text variant={'label'}>Linkedin</Text>
      <Input
        value={personalDataForm.linkedin}
        onChange={(event) =>
          updatePersonalDataForm('linkedin', event.target.value)
        }
      />

      <Text variant={'label'}>About me</Text>
      <Textarea
        value={personalDataForm.aboutMe}
        onChange={(event) =>
          updatePersonalDataForm('aboutMe', event.target.value)
        }
      />

      <Text variant={'label'}>Certifications</Text>
      <PersonalDataDescribableEditor
        personalDataDescribable={personalDataForm.certifications}
        onChange={(change) => updatePersonalDataForm('certifications', change)}
      />

      <Text variant={'label'}>Education</Text>
      <PersonalDataDescribableEditor
        personalDataDescribable={personalDataForm.education}
        onChange={(change) => updatePersonalDataForm('education', change)}
      />

      <Text variant={'label'}>Work experience</Text>
      <PersonalDataDescribableEditor
        personalDataDescribable={personalDataForm.workExperience}
        onChange={(change) => updatePersonalDataForm('workExperience', change)}
      />

      <Text variant={'label'}>Skills</Text>
      <PersonalDataDescribableNameEditor
        personalDataDescribable={personalDataForm.skills}
        onChange={(change) => updatePersonalDataForm('skills', change)}
      />

      <Text variant={'label'}>Hobbies</Text>
      <PersonalDataDescribableNameEditor
        personalDataDescribable={personalDataForm.hobbies}
        onChange={(change) => updatePersonalDataForm('hobbies', change)}
      />
    </Flex>
  );
}
