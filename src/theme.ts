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
  },
});
