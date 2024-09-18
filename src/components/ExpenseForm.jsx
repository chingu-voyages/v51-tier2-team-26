import { useState } from 'react';
import {
  Box,
  FormControl,
  FormHelperText,
  Grid2,
  MenuItem,
  TextField,
  Select,
  InputLabel,
} from '@mui/material';

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
        <Grid2 container xs={12}>
          <Grid2 container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid2 xs={6}>
              <FormControl key='name' fullWidth>
                <TextField
                  fullWidth
                  error={!formData.name}
                  helperText={!formData.name ? 'Name is required' : ''}
                  label='Name of Expense'
                  name='name'
                  onChange={handleChange}
                  required
                  size='small'
                  value={formData.name}
                />
              </FormControl>
            </Grid2>
            <Grid2 xs={6}>
              <FormControl key='amount' fullWidth>
                <TextField
                  fullWidth
                  error={!formData.amount}
                  helperText={!formData.amount ? 'Amount is required' : ''}
                  label='Amount'
                  name='amount'
                  onChange={handleChange}
                  required
                  size='small'
                  value={formData.amount}
                />
              </FormControl>
            </Grid2>
          </Grid2>
          <Grid2 xs={6}>
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
                rows={4}
                value={formData.description}
              />
            </FormControl>
          </Grid2>
        </Grid2>
        <Grid2 container xs={12}>
          <Grid2 xs={12}>
            <FormControl
              fullWidth
              error={!formData.category}
              margin='normal'
              size='small'>
              <InputLabel htmlFor='category'>Category</InputLabel>
              <Select
                native
                id='category'
                name='category'
                label='category'
                value={formData.category}
                onChange={handleChange}
                required
                fullWidth>
                <option aria-label='None' value='' />
                <option value='Dining'>Dining</option>
                <option value='Groceries'>Groceries</option>
                {/* Add more categories as needed */}
              </Select>
              {!formData.category && (
                <FormHelperText>Category is required</FormHelperText>
              )}
            </FormControl>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
