import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectResumes } from '../../../../store/resume/resume.slice';
import { Resume } from '../../../../model/resume.model';

export function ResumeListPage() {
  const resumes = useSelector(selectResumes);
  return (
    <Wrap m={'20px'} spacing={'20px'} mt={'20px'} justify={'space-evenly'}>
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
  );
}
