import { useSelector } from 'react-redux';
import { selectTemplatesByFilters } from '../../../../store/template/templates.slice';
import { Template } from '../../../../model/template.model';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { TemplateDrawer } from '../../../../components/template-drawer/TemplateDrawer';
import { A4 } from '../../../../const/a4.const';
import { defaultPersonalDataConst } from '../../const/default-personal-data.const';

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
      <Flex gap={'20px'} mt={'20px'} wrap={'wrap'} justify={'space-evenly'}>
        {templates.map((el: Template) => {
          return (
            <Box
              w={A4.width / 2}
              h={A4.height / 2}
              bgColor={'white'}
              borderRadius={'20px'}
              key={el.id}
              onClick={() => navigate(el.id.toString())}
              cursor={'pointer'}
              overflow={'hidden'}
              boxShadow={'#e9e9e9 0px 0px 15px 5px'}
              transition={'0.1s'}
              _hover={{
                transform: 'scale(1.02)',
              }}
            >
              <TemplateDrawer
                template={el}
                dimension={A4}
                data={defaultPersonalDataConst}
                scale={0.5}
              />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
}
