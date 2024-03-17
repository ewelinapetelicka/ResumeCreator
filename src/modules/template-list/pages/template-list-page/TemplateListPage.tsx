import { useSelector } from 'react-redux';
import { selectTemplates } from '../../../../store/template/templates.slice';
import { Template } from '../../../../model/template.model';
import { Wrap, WrapItem } from '@chakra-ui/react';

export function TemplateListPage() {
  const templates = useSelector(selectTemplates);

  return (
    <Wrap m={'20px'} spacing={'20px'} mt={'20px'} justify={'space-evenly'}>
      {templates.map((el: Template) => {
        return (
          <WrapItem
            w={'354px'}
            h={'100px'}
            bgColor={'white'}
            borderRadius={'20px'}
            key={el.id}>
            {el.name}
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
