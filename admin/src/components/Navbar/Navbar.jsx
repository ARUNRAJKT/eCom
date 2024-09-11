import React from "react";
import {
  Flex,
  Text,
  Button,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  // Map routes to page titles
  const pageTitles = {
    "/dashboard": "Dashboard",
    "/users": "Users",
    "/products": "Products",
    "/orders": "Orders",
    "/admins": "Admin",
    // Add more routes as needed
  };

  // Get the current page title based on the current route
  const currentPage = pageTitles[location.pathname] || "Home";
  const loggedInUser = "John Doe"; // Replace with actual user data

  // Determine whether to show the current page title based on the screen size
  const showPageTitle = useBreakpointValue({ base: false, md: true });

  return (
    <Flex as="nav" bg="teal.500" p={4} color="white" align="center">
      {/* Conditionally render the page title based on screen size */}
      {showPageTitle && (
        <Text fontSize="xl" fontWeight="bold">
          {currentPage}
        </Text>
      )}

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
