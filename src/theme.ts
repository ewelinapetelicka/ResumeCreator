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
    Button: defineStyleConfig({
      variants: {
        badge: defineStyle({
          pointerEvents: 'none',
        }),
        color: defineStyle({
          width: '20px',
          height: '20px',
          padding: '0',
          minWidth: '20px',
          borderRadius: '20px',
        }),
        selectedColor: defineStyle({
          width: '20px',
          height: '20px',
          padding: '0',
          minWidth: '20px',
          borderRadius: '20px',
          border: '4px solid #a1a1a1',
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
