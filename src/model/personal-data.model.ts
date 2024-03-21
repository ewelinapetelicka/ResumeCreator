export interface PersonalData {
  name: string;
  surname: string;
  fullName: string;
}

export type PersonalDataField = keyof PersonalData;
