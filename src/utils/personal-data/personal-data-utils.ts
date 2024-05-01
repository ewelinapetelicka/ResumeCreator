import { PersonalData } from '../../model/personal-data.model';

export class PersonalDataUtils {
  static generateEmpty(): PersonalData {
    return {
      name: '',
      surname: '',
      role: '',
      personalPhoto: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      certifications: [],
      education: [],
      workExperience: [],
      hobbies: [],
      skills: [],
      aboutMe: '',
    };
  }
}
