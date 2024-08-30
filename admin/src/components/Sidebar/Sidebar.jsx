import React from 'react';
import {
    Box,
    Button,
    useColorModeValue,
    Drawer,
    DrawerContent,
    useDisclosure,
} from '@chakra-ui/react';
import SidebarContent from './SidebarContent';
import { FaBars } from 'react-icons/fa';
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
                top="20px"
                left="20px"
                bg="teal.500"
                p="10px"
                borderRadius="md"
                color="white"
                cursor="pointer"
            >

                <Button
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    leftIcon={<FaBars />} // Adds an icon to the left of the button text
                    borderRadius="md" // Rounded corners
                    _hover={{ bg: 'teal.50', borderColor: 'teal.500' }} // Light background and border color on hover
                    _active={{ bg: 'teal.100', borderColor: 'teal.600' }} // Slightly darker background on active
                    _focus={{ boxShadow: 'outline' }} // Outlined shadow on focus
                    onClick={onOpen} // Trigger the menu or any action
                >

                </Button>
            </Box>
        </Box>
    );
}
