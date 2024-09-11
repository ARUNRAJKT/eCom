import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  SimpleGrid,
  Spinner,
  HStack,
  Text,
  Input,
  useToast,
} from '@chakra-ui/react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const toast = useToast();

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:4000/user/');
        setUsers(response.data);
        setFilteredUsers(response.data); // Set initial filteredUsers to all users
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredUsers(
      users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(query) ||
          user.lastName.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      )
    );
  };

  // Delete a user
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:4000/user/${id}`);
      setUsers(users.filter((user) => user._id !== id));
      setFilteredUsers(filteredUsers.filter((user) => user._id !== id)); // Update filteredUsers
      toast({
        position: 'top',
        description: `User deleted successfully`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: 'top',
        description: 'Failed to delete user',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <SimpleGrid bg='white' p={5} shadow='lg' borderRadius='lg' overflowX='auto'>
      <Input
        placeholder='Search by name or email...'
        value={searchQuery}
        onChange={handleSearchChange}
        maxW='300px'
        mb={4} // Added margin-bottom for spacing
      />
      {loading ? (
        <HStack my={8} alignItems='center' justifyContent='center'>
          <Spinner size='lg' color='blue.500' />
        </HStack>
      ) : error ? (
        <HStack my={8} alignItems='center' justifyContent='center'>
          <Text color='red.500'>{error}</Text>
        </HStack>
      ) : (
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>User Name</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Zip Code</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredUsers.map((user) => (
              <Tr key={user._id}>
                <Td>{user.firstName} {user.lastName}</Td>
                <Td>{user.email}</Td>
                <Td>{user.address?.street || 'N/A'}, {user.address?.city || 'N/A'}, {user.address?.state || 'N/A'}, <i>{user.address?.country || 'N/A'}</i></Td>
                <Td>{user.address?.zipCode || 'N/A'}</Td>
                <Td>
                  <Button
                    variant='outline'
                    colorScheme='red'
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant='outline'
                    colorScheme='red'
                    // onClick={() => handleDelete(user._id)}
                  >
                    View
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </SimpleGrid>
  );
}
