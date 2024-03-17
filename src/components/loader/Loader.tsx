import { Box, Spinner, Text } from '@chakra-ui/react';

export function Loader() {
  return (
    <Box
      w={'100%'}
      h={'100%'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={'10px'}
      justifyContent={'center'}>
      <Spinner
        thickness="8px"
        speed="1s"
        emptyColor="gray.200"
        color="gray.700"
        size="xxl"
      />
      <Text fontWeight={'bold'}>LOADING...</Text>
    </Box>
  );
}
