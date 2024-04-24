import { Button, Flex, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { MdCenterFocusWeak } from 'react-icons/md';

interface TemplatePreviewActionsProps {
  onResetPosition: () => void;
}

export function TemplatePreviewActions(props: TemplatePreviewActionsProps) {
  return (
    <Flex position="absolute" direction="column" gap={2} right={0} zIndex={100}>
      <Tooltip label="Reset position" placement="left">
        <Button
          colorScheme="teal"
          variant="ghost"
          size="md"
          boxShadow={'0px 1px 4px #e1e1e1'}
          bg={'white'}
          onClick={() => props.onResetPosition()}>
          <MdCenterFocusWeak />
        </Button>
      </Tooltip>
    </Flex>
  );
}
