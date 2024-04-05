import { PersonalData } from '../../../model/personal-data.model';

export const defaultPersonalDataConst: PersonalData = {
  name: 'John',
  surname: 'Doe',
  fullName: 'John Doe',
  role: 'Senior Manager',
  personalPhoto: 'https://thispersondoesnotexist.com/',
  phone: '777777777',
  email: 'johnDoe@gmail.com',
  github: 'github.com/johnDoe',
  linkedin: 'linkedin.com/in/johnDoe',
  certifications: [
    {
      name: 'Certified Manager (CM)',
      description:
        'This certification demonstrates proficiency in essential managerial skills, including leadership, strategic planning, ' +
        'and team management.',
    },
    {
      name: 'Project Management Professional (PMP)',
      description:
        'PMP certification validates expertise in project management methodologies, including initiating, planning, executing,' +
        ' monitoring, controlling, and closing projects effectively.',
    },
    {
      name: 'Certified ScrumMaster (CSM)',
      description:
        'CSM certification demonstrates understanding and application of Scrum principles in managing agile projects,' +
        ' fostering collaboration, and maximizing team productivity.',
    },
  ],
  education: [
    {
      name: 'Bachelor of Business Administration (BBA)- University of Cambridge',
      description:
        'Studied business administration with a focus on management principles. Took courses in organizational behavior,' +
        ' finance, marketing, and strategic planning. Participated in extracurricular activities such as student government and business clubs.',
    },
    {
      name: 'Master of Business Administration (MBA)- University of Cambridge',
      description:
        'Specialized in strategic management and organizational leadership. Conducted research on leadership styles and their impact on organizational performance.' +
        ' Completed a capstone project on strategic planning for global expansion. Engaged in internships with leading companies to gain practical experience in management.',
    },
  ],
  workExperience: [
    {
      name: 'Enterprises-FOTech- Operations Manager',
      time: 'June 2014-December 2018',
      description: `Managed day-to-day operations of multiple departments, including human resources, finance, and customer service.
       Implemented process improvements to streamline operations and reduce costs. Led training initiatives to develop employee skills and enhance team performance. 
       Collaborated with senior management to develop strategic plans and achieve organizational goals.`,
    },
    {
      name: 'CFG-Corporation - Senior Project Manager',
      time: 'January 2019- present',
      description:
        'Lead cross-functional teams in the successful delivery of large-scale projects. Developed and executed project plans,' +
        ' monitored progress, and managed project budgets. Facilitated communication between stakeholders and team members to ensure alignment with project goals and objectives. ' +
        'Implemented agile methodologies to improve project efficiency and adaptability.',
    },
  ],
  hobbies: ['Skiing', 'Horseback Riding ', 'Chess', 'The Pre-War Cinema Era"'],
  skills: [
    'Communication',
    'Decision Making',
    'Leadership',
    'Strategic Planning',
    'Conflict Resolution',
  ],
  aboutMe:
    'John is a seasoned Senior Manager with a proven track record of driving organizational success through effective leadership and strategic planning.' +
    ' With over a decade of experience, he has honed his skills in managing cross-functional teams and delivering high-impact projects.' +
    ' John is passionate about fostering collaboration and maximizing team productivity.' +
    ' He thrives in dynamic environments and is adept at implementing agile methodologies to ensure project efficiency and adaptability.' +
    ' John is known for his strong communication skills and ability to resolve conflicts effectively, contributing to a positive work culture and successful project outcomes. ' +
    'Outside of work, he enjoys skiing, horseback riding, playing chess, and exploring the enchanting world of The Pre-War Cinema Era.' +
    " With a Bachelor's and Master's degree in Business Administration from the University of Cambridge, " +
    'John brings a blend of theoretical knowledge and practical expertise to every endeavor he undertakes.' +
    ' He is committed to continuous learning and professional development, always seeking opportunities to expand his skill set and stay ahead in a rapidly evolving business landscape.',
};
