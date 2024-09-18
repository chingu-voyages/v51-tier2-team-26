import { useState } from 'react';
import dayjs from 'dayjs';
import { Backdrop, Box, IconButton, Divider, Grid2 } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FileUploadButton from './FileUploadButton';
import InputField from './InputField';
import CategorySelectField from './CategorySelectField';
import DatePickerField from './DatePickerField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AmountInputField from './AmountInputField';

export default function ExpenseForm() {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    description: '',
    category: '',
    date: dayjs().format('YYYY-MM-DD'),
  });

  const [touched, setTouched] = useState({
    name: false,
    amount: false,
    description: false,
    category: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
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
    setTouched({
      name: true,
      amount: true,
      description: true,
      category: true,
    });
    // Add all fields required logic here
    console.log(formData);
  };

  const isFieldError = (field) => {
    return touched[field] && !formData[field];
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Backdrop
        sx={{
          backgroundColor: 'rgba(117, 196, 126)',
          backdropFilter: 'blur(3px)',
        }}
        open={true}>
        <Box
          component='form'
          onSubmit={handleSubmit}
          noValidate
          sx={{
            border: '2px solid #0B1F0D',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            width: '0.75',
            margin: 'auto',
          }}>
          <Grid2
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column', paddingX: '30px' }}>
            <Divider textAlign='left' sx={{ color: '#040504', marginY: 2 }}>
              Expense Form
            </Divider>
            <Grid2 container sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputField
                name='name'
                label='Name of Expense'
                value={formData.name}
                placeholder='ex. Game Night'
                error={isFieldError('name')}
                helperText={isFieldError('name') ? 'Name is required' : ''}
                onChange={handleChange}
              />
              <AmountInputField
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                error={isFieldError('amount')}
                helperText={isFieldError('amount') ? 'Amount is required' : ''}
              />
              <CategorySelectField
                name='category'
                label='Category'
                value={formData.category}
                error={isFieldError('category')}
                onChange={handleChange}
              />
              <InputField
                name='description'
                label='Description'
                value={formData.description}
                placeholder='ex. Weekly game night with the gang'
                error={isFieldError('description')}
                helperText={
                  isFieldError('description') ? 'Description is required' : ''
                }
                onChange={handleChange}
                multiline
                rows={5.2}
              />
            </Grid2>
            <Grid2 fullWidth>
              <DatePickerField
                value={dayjs(formData.date)}
                onChange={handleDateChange}
              />
            </Grid2>
            <FileUploadButton />
          </Grid2>
          <Grid2
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column', paddingX: '30px' }}>
            <Grid2
              container
              alignItems='center' // Align items vertically in the center
              sx={{ display: 'flex', flexDirection: 'row', gap: 2 }} // Use gap to manage spacing between items
            >
              <Divider
                textAlign='left'
                sx={{ color: '#040504', marginY: 2, flexGrow: 1 }}>
                Participants
              </Divider>
              <IconButton aria-label='add participant' size='large'>
                <AddCircleIcon fontSize='inherit' />
              </IconButton>
            </Grid2>
          </Grid2>
        </Box>
      </Backdrop>
    </LocalizationProvider>
  );
}
