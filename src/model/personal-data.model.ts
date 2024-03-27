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
}

export type PersonalDataField = keyof PersonalData;
