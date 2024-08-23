import React from 'react';
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';
import SidebarContent from './SidebarContent';

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Using Chakra's color mode values for a smoother background color
  const bgColor = useColorModeValue('gray.50', 'gray.800'); // lighter gray for light mode, darker for dark mode

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* SidebarContent is the actual sidebar content */}
      <SidebarContent
        onClose={onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* Use this button or some other trigger to open the drawer in mobile view */}
      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={onOpen}
        position="fixed"
        top="10px"
        left="10px"
        bg="teal.500"
        p="10px"
        borderRadius="md"
        color="white"
        cursor="pointer"
      >
        Open Menu
      </Box>
    </Box>
  );
}
