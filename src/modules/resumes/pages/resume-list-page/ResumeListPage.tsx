import { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Wrap,
} from '@chakra-ui/react';
import { Resume } from '../../../../model/resume.model';
import { SearchIcon } from '@chakra-ui/icons';
import { SlMagnifierRemove } from 'react-icons/sl';
import {
  selectResumesByFilters,
  toggleFavoriteResume,
} from '../../../../store/resume/resumes.slice.ts';
import { useDispatch, useSelector } from 'react-redux';
import { ResumeCard } from '../../components/resume-card/ResumeCard.tsx';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useHttpClient } from '../../../../hooks/http-client/use-http-client.ts';

export function ResumeListPage() {
  const [query, setQuery] = useState('');
  const resumes = useSelector(selectResumesByFilters(query));
  const dispatch = useDispatch();
  const http = useHttpClient();

  function toggleFavorite(resume: Resume) {
    dispatch(toggleFavoriteResume(resume.id));
    http.patch('resumes/' + resume.id, {
      isFavorite: !resume.isFavorite,
    });
  }

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
      {resumes.length !== 0 ? (
        <Wrap spacing={'20px'} mt={'20px'} justify={'space-evenly'}>
          {resumes.map((el: Resume) => {
            return (
              <Box>
                <IconButton
                  key={el.id}
                  onClick={() => toggleFavorite(el)}
                  aria-label="Add to favorite"
                  icon={el.isFavorite ? <FaStar /> : <FaRegStar />}
                />
                <ResumeCard resume={el} key={el.id} />
              </Box>
            );
          })}
        </Wrap>
      ) : (
        <Flex
          w={'100%'}
          pt={'200px'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Flex
            p={'30px'}
            w={'50%'}
            boxShadow={'0px 1px 4px #e1e1e1'}
            borderRadius={'30px'}
            bg={'white'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={'15px'}>
            <SlMagnifierRemove />
            <Text>NO RESUMES FOUND</Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
