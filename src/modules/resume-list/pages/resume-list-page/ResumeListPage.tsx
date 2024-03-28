import React, { useState } from 'react';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectResumesByFilters } from '../../../../store/resume/resumes.slice';
import { Resume } from '../../../../model/resume.model';
import { SearchIcon } from '@chakra-ui/icons';

export function ResumeListPage() {
  const [query, setQuery] = useState('');
  const resumes = useSelector(selectResumesByFilters(query));

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
        {resumes.map((el: Resume) => {
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
    </Flex>
  );
}
