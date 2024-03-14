import { useDispatch, useSelector } from 'react-redux';
import {
  selectTemplates,
  setTemplates,
} from '../../../../store/template/templates.slice';
import { useEffect } from 'react';
import { templatesConst } from '../../../../const/template.const';
import { Template } from '../../../../model/template.model';
import { Box, Card, Wrap, WrapItem } from '@chakra-ui/react';

export function TemplateListPage() {
  const dispatch = useDispatch();
  const templates = useSelector(selectTemplates);

  useEffect(() => {
    dispatch(setTemplates(templatesConst));
  }, []);

  return (
    <Wrap
      m={'20px'}
      spacing={'20px'}
      mt={'20px'}
      display={'flex'}
      justifyContent={'space-evenly'}
      alignItems={'center'}>
      {templates.map((el: Template) => {
        return (
          <WrapItem
            w={'354px'}
            h={'100px'}
            bgColor={'white'}
            borderRadius={'20px'}>
            {el.name}
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
