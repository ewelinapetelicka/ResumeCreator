import { Box, Flex, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { QUESTIONS } from '../../const/questions.ts';

export function FrequentlyAskedQuestionsPage() {
  return (
    <Box
      w={'100%'}
      h={'calc 100vh - 87px'}
      bg={'gray.100'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Flex
        w={'90%'}
        h={'80%'}
        mt={'70px'}
        flexDirection={'column'}
        bg={'white'}
        boxShadow={'0px 1px 4px #e1e1e1'}
        borderRadius={'30px'}
        justifySelf={'end'}
        alignItems={'center'}
        overflowY={'auto'}>
        <Text fontSize="5xl">Frequently Asked Questions</Text>
        <Flex justifyContent={'space-evenly'} w={'100%'}>
          <List
            display={'grid'}
            gap={'20px'}
            gridTemplateColumns={'auto auto'}
            p={'30px'}>
            {QUESTIONS.map((el) => {
              return (
                <ListItem>
                  <Flex alignItems={'center'}>
                    <ListIcon
                      as={HiQuestionMarkCircle}
                      color="gray.500"
                      fontSize={'xxx-large'}
                    />
                    <Text fontSize={'xl'}>{el.question}</Text>
                  </Flex>
                  {el.answer}
                </ListItem>
              );
            })}
          </List>
        </Flex>
      </Flex>
    </Box>
  );
}
