import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Spinner: defineStyleConfig({
      sizes: {
        xxl: defineStyle({
          height: 120,
          width: 120,
        }),
      },
    }),
    Text: defineStyleConfig({
      variants: {
        label: defineStyle({
          fontSize: 'small',
          fontWeight: 'bold',
          color: 'gray.600',
          textTransform: 'uppercase',
          paddingTop: '10px',
          _after: {
            content: '":"',
          },
        }),
      },
    }),
  },
});
