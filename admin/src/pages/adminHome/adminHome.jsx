import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Box, useBreakpointValue } from '@chakra-ui/react';

export default function AdminHome() {
  const sidebarWidth = useBreakpointValue({ base: 'full', md: '60' });

  return (
    <Box display="flex" minH="100vh">
      <Sidebar />
      <Box
        flex="1"
        ml={{ base: 0, md: sidebarWidth }} // Margin-left for the content area to avoid overlap with Sidebar
        p={4}
      >
        <Navbar />
        {/* Main content goes here */}
      </Box>
    </Box>
  );
}

