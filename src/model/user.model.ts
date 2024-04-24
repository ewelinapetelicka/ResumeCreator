import { PersonalDataDescribable } from './personal-data.model';

export interface User {
  id: number;
  email: string;
  name?: string;
  surname?: string;
  role?: string;
  personalPhoto?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  certifications?: PersonalDataDescribable[];
  education?: PersonalDataDescribable[];
  workExperience?: PersonalDataDescribable[];
  hobbies?: PersonalDataDescribable[];
  skills?: PersonalDataDescribable[];
  aboutMe?: string;
}
