import { useState } from 'react';
import { Box, FormControl, FormLabel, Grid2, TextField } from '@mui/material';

export default function ExpenseForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // add all fields are required logic here
    console.log(formData);
  };

  return (
    <Box component='form' onSubmit={handleSubmit} noValidate>
      <Grid2
        container
        spacing={2}
        sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid2 xs={12}>
          <FormControl key='name' fullWidth>
            <TextField
              fullWidth
              error={!formData.name}
              helperText={!formData.name ? 'Name is required' : ''}
              label='Name of Expense'
              name='name'
              onChange={handleChange}
              required
              value={formData.name}
            />
          </FormControl>
        </Grid2>
        <Grid2 xs={12}>
          <FormControl key='description' fullWidth>
            <TextField
              fullWidth
              error={!formData.description}
              helperText={
                !formData.description ? 'Description is required' : ''
              }
              label='Description'
              multiline
              name='description'
              onChange={handleChange}
              required
              value={formData.description}
            />
          </FormControl>
        </Grid2>
      </Grid2>
    </Box>
  );
}
