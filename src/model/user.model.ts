import { PersonalData } from './personal-data.model';

export interface User {
  id: number;
  email: string;
  personalData: PersonalData;
}
