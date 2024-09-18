import { useState } from 'react';
import dayjs from 'dayjs';
import { Box, Divider, Grid2 } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FileUploadButton from './FileUploadButton';
import InputField from './InputField';
import SelectField from './SelectField';
import DatePickerField from './DatePickerField';

export default function ExpenseForm() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    description: '',
    category: '',
    date: dayjs().format('YYYY-MM-DD'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date: date ? date.format('YYYY-MM-DD') : '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add all fields required logic here
    console.log(formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box component='form' onSubmit={handleSubmit} noValidate>
        <Divider textAlign='left'>Expense Form</Divider>
        <Grid2
          container
          spacing={2}
          sx={{ display: 'flex', flexDirection: 'column' }}>
          <Grid2 container xs={12}>
            <Grid2 container sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputField
                name='name'
                label='Name of Expense'
                value={formData.name}
                error={!formData.name}
                helperText={!formData.name ? 'Name is required' : ''}
                onChange={handleChange}
              />
              <InputField
                name='amount'
                label='Amount'
                value={formData.amount}
                error={!formData.amount}
                helperText={!formData.amount ? 'Amount is required' : ''}
                onChange={handleChange}
              />
              <SelectField
                name='category'
                label='Category'
                value={formData.category}
                error={!formData.category}
                onChange={handleChange}
              />
              <InputField
                name='description'
                label='Description'
                value={formData.description}
                error={!formData.description}
                helperText={
                  !formData.description ? 'Description is required' : ''
                }
                onChange={handleChange}
                multiline
                rows={5.2}
              />
            </Grid2>
          </Grid2>
          <Grid2>
            <DatePickerField
              value={dayjs(formData.date)}
              onChange={handleDateChange}
            />
          </Grid2>
          <FileUploadButton />
        </Grid2>
        <Divider textAlign='left'>Participants</Divider>
      </Box>
    </LocalizationProvider>
  );
}
