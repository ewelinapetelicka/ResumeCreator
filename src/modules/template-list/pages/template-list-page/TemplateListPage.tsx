import { useDispatch, useSelector } from 'react-redux';
import {
  selectTemplates,
  setTemplates,
} from '../../../../store/template/templates.slice';
import { useEffect } from 'react';
import { Template } from '../../../../model/template.model';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client';

export function TemplateListPage() {
  const httpClient = useHttpClient();
  const dispatch = useDispatch();
  const templates = useSelector(selectTemplates);

  useEffect(() => {
    httpClient
      .get<Template[]>('templates')
      .then((templates) => dispatch(setTemplates(templates)));
  }, []);

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
