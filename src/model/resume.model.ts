import { PersonalData } from './personal-data.model';

export interface Resume {
  id: number;
  name: string;
  personalData: PersonalData;
  templateId: number;
  userId: number;
  colorVariant?: string;
}
