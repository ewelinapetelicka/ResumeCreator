export interface PersonalDataDescribable {
  name: string;
  description?: string;
  time?: string;
  company?: string;
}

export interface PersonalData {
  name: string;
  surname: string;
  role: string;
  personalPhoto: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  certifications: PersonalDataDescribable[];
  education: PersonalDataDescribable[];
  workExperience: PersonalDataDescribable[];
  hobbies: PersonalDataDescribable[];
  skills: PersonalDataDescribable[];
  aboutMe: string;
  updateDate: string;
}

export type PersonalDataField =
  | keyof PersonalData
  | keyof PersonalDataDescribable;
export type PersonalDataValue = string | PersonalDataDescribable[];
