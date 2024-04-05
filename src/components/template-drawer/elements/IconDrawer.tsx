import { IconElement } from '../../../model/template.model';
import loadable, { LoadableComponent } from '@loadable/component';
import { IconBaseProps } from 'react-icons';

interface IconDrawerProps {
  element: IconElement;
  data: string;
}

export function IconDrawer(props: IconDrawerProps) {
  const lib = props.data
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')[0]
    .toLocaleLowerCase();

  const ElementIcon: LoadableComponent<IconBaseProps> = loadable(
    () => import(`../../../../node_modules/react-icons/${lib}/index.js`),
    {
      resolveComponent: (el: JSX.Element) =>
        el[props.data as keyof JSX.Element],
    },
  );

  return <ElementIcon {...props.element.style} />;
}
