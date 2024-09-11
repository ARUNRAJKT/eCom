import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAdminPrivilegeColor } from '../utilits/helpers';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  SimpleGrid,
  Spinner,
  Select,
  useToast,
  HStack,
  Text,
  Input,
  Box,
} from '@chakra-ui/react';

export default function Admins() {
  const toast = useToast();
  const [admins, setAdmins] = useState([]);
  const [filteredAdmins, setFilteredAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch admins data when the component mounts
  useEffect(() => {
    const fetchAdmins = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:4000/admins');
        setAdmins(response.data);
        setFilteredAdmins(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredAdmins(
      admins.filter(
        (admin) =>
          admin.firstName.toLowerCase().includes(query) ||
          admin.lastName.toLowerCase().includes(query) ||
          admin.email.toLowerCase().includes(query)
      )
    );
  };

  // Function for handling privilege changes
  const handleEdit = async (e, id) => {
    setLoading(true);
    const role = e.target.value; // Adjust to handle roles
    try {
      await axios.put(`/api/admins/${id}`, { role });
      setAdmins(
        admins.map((admin) =>
          admin._id === id ? { ...admin, role } : admin
        )
      );
      setFilteredAdmins(
        filteredAdmins.map((admin) =>
          admin._id === id ? { ...admin, role } : admin
        )
      );
      toast({
        position: 'top',
        description: `Admin role changed to ${role}`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: 'top',
        description: 'Failed to update role',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  // Function for handling admin deletion
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`/${id}`);
      setAdmins(admins.filter((admin) => admin._id !== id));
      setFilteredAdmins(filteredAdmins.filter((admin) => admin._id !== id));
      toast({
        position: 'top',
        description: `Admin deleted`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        position: 'top',
        description: 'Failed to delete admin',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <SimpleGrid bg='white' p={5} shadow='lg' borderRadius='lg' overflowX='auto'>
      <HStack mb={5} justifyContent='space-between'>
        <Input
          placeholder='Search by name or email...'
          value={searchQuery}
          onChange={handleSearchChange}
          maxW='300px'
        />
        <Button colorScheme='teal'>Add New Admin</Button>
      </HStack>

      {loading ? (
        <HStack my={8} alignItems='center' justifyContent='center'>
          <Spinner size='lg' color='brown.500' />
        </HStack>
      ) : error ? (
        <HStack my={8} alignItems='center' justifyContent='center'>
          <Text color='red.500'>{error}</Text>
        </HStack>
      ) : (
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredAdmins.map((admin) => {
              const { _id, firstName, lastName, email, role, isActive } = admin;
              return (
                <Tr key={_id}>
                  <Td>{firstName} {lastName}</Td>
                  <Td>{email}</Td>
                  <Td>
                    <Badge colorScheme={getAdminPrivilegeColor(role)}>
                      {role}
                    </Badge>
                  </Td>
                  <Td>
                    <Badge colorScheme={isActive ? 'green' : 'red'}>
                      {isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing='5'>
                      {/* <Select
                        maxW={125}
                        focusBorderColor='brown.500'
                        value={role}
                        onChange={(e) => handleEdit(e, _id)}
                      >
                        <option value='admin'>Admin</option>
                        <option value='moderator'>Moderator</option>
                        <option value='user'>User</option>
                      </Select> */}
                      <Button
                        variant='outline'
                        colorScheme='blue'
                        onClick={() => handleEdit(_id)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant='outline'
                        colorScheme='red'
                        onClick={() => handleDelete(_id)}
                      >
                        Delete
                      </Button>
                    </HStack>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      )}
    </SimpleGrid>
  );
}
