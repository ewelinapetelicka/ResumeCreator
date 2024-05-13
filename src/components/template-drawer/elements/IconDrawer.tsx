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
      return <FiPhone {...props.element.style} />;
    case 'FiGithub':
      return <FiGithub {...props.element.style} />;
    case 'FaRegEnvelope':
      return <FaRegEnvelope {...props.element.style} />;
    case 'LuLinkedin':
      return <LuLinkedin {...props.element.style} />;
    default:
      return <></>;
  }
}
