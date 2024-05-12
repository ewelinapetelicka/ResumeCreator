import { IconElement } from '../../../model/template.model';
import { FiGithub, FiPhone } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';
import { FaRegEnvelope } from 'react-icons/fa';

interface IconDrawerProps {
  element: IconElement;
  data: string;
}

export function IconDrawer(props: IconDrawerProps) {
  switch (props.data) {
    case 'FiPhone':
      return <FiPhone />;
    case 'FiGithub':
      return <FiGithub />;
    case 'FaRegEnvelope':
      return <FaRegEnvelope />;
    case 'LuLinkedin':
      return <LuLinkedin />;
    default:
      return <></>;
  }
}
