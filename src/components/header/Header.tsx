import { Box, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Box
      bg={'white'}
      h={'87px'}
      m={'0 10px 0 10px'}
      p={'0 0 0 20px'}
      gap={'5px'}
      display={'flex'}
      alignItems={'center'}
      boxShadow={'0px 1px 4px #e1e1e1'}
      borderRadius={'10px'}>
      <Text fontWeight={'bolder'} fontSize={'xx-large'}>
        R
      </Text>
      <Text
        textTransform={'uppercase'}
        fontWeight={'bolder'}
        letterSpacing={'5px'}>
        esume
      </Text>
      <Text fontWeight={'bolder'} fontSize={'xx-large'}>
        C
      </Text>
      <Text
        textTransform={'uppercase'}
        fontWeight={'bolder'}
        letterSpacing={'5px'}>
        reator
      </Text>
    </Box>
  );
}
