export interface PersonalDataDescribable {
  name: string;
  description?: string;
  time?: string;
}

export interface PersonalData {
  name: string;
  surname: string;
  fullName: string;
  role: string;
  personalPhoto: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  certifications: PersonalDataDescribable[];
  education: PersonalDataDescribable[];
  workExperience: PersonalDataDescribable[];
  hobbies: string[];
  skills: string[];
  aboutMe: string;
}

export type PersonalDataField = keyof PersonalData;
