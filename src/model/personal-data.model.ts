export interface PersonalData {
  name: string;
  surname: string;
  fullName: string;
  role: string;
}

export type PersonalDataField = keyof PersonalData;
