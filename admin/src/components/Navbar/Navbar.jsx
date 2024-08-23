import React from 'react';
import { Flex, Text, Button, Spacer } from '@chakra-ui/react';

export default function Navbar() {
  // Example values for the current page and logged-in user
  const currentPage = "Home";
  const loggedInUser = "John Doe";

  return (
    <Flex as="nav" bg="teal.500" p={4} color="white" align="center">
      {/* Left side: Page Title */}
      <Text fontSize="xl" fontWeight="bold">
        {currentPage}
      </Text>

      {/* Spacer to push the user info to the right */}
      <Spacer />

      {/* Right side: User Info */}
      <Flex align="center">
        <Text mr={4}>Welcome, {loggedInUser}</Text>
        <Button colorScheme="teal" variant="outline" size="sm">
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}
