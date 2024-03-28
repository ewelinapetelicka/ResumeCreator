import { useSelector } from 'react-redux';
import {
  selectTemplates,
  selectTemplatesByFilters,
} from '../../../../store/template/templates.slice';
import { Template } from '../../../../model/template.model';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

export function TemplateListPage() {
  const [query, setQuery] = useState('');
  const templates = useSelector(selectTemplatesByFilters(query));
  const navigate = useNavigate();

  return (
    <Flex direction={'column'} m={'20px'}>
      <Flex justifyContent={'flex-end'}>
        <InputGroup w={300}>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            bg="white"
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </InputGroup>
      </Flex>
      <Wrap spacing={'20px'} mt={'20px'} justify={'space-evenly'}>
        {templates.map((el: Template) => {
          return (
            <WrapItem
              w={'354px'}
              h={'100px'}
              bgColor={'white'}
              borderRadius={'20px'}
              key={el.id}
              onClick={() => navigate(el.id)}
              cursor={'pointer'}>
              {el.name}
            </WrapItem>
          );
        })}
      </Wrap>
    </Flex>
  );
}
