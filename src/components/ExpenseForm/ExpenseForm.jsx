import { useState } from 'react';
import dayjs from 'dayjs';
import { Backdrop, Box, Divider, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FileUploadButton from './Fields/FileUploadButton';
import InputField from './Fields/InputField';
import CategorySelectField from './Fields/CategorySelectField';
import DatePickerField from './Fields/DatePickerField';
import ParticipantsSection from './ParticipantsSection/ParticipantsSection';

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

  const handleAmountChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^0-9.,]/g, '');

    // Restrict to only two decimal places
    const parts = inputValue.split('.');
    if (parts[1] && parts[1].length > 2) {
      inputValue = parts[0] + '.' + parts[1].slice(0, 2);
    }

    // Format the number with commas
    const formattedValue = parseFloat(inputValue)
      ? Number(inputValue).toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : inputValue;

    setFormData((prevData) => ({
      ...prevData,
      amount: formattedValue,
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
          <Grid
            container
            spacing={2}
            sx={{ display: 'flex', flexDirection: 'column', paddingX: '30px' }}>
            <Divider textAlign='left' sx={{ color: '#040504', marginY: 2 }}>
              Expense Form
            </Divider>
            <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
              <InputField
                name='name'
                label='Name of Expense'
                value={formData.name}
                placeholder='ex. Game Night'
                error={isFieldError('name')}
                helperText={isFieldError('name') ? 'Name is required' : ''}
                onChange={handleChange}
              />
              <InputField
                name='amount'
                label='Total Amount'
                value={formData.value}
                placeholder='$0.00'
                error={isFieldError('amount')}
                helperText={isFieldError('amount') ? 'Amount is required' : ''}
                onChange={handleAmountChange}
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
            </Grid>
            <Grid fullWidth>
              <DatePickerField
                value={dayjs(formData.date)}
                onChange={handleDateChange}
              />
            </Grid>
            <FileUploadButton />
          </Grid>
          <ParticipantsSection />
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              padding: '30px',
            }}>
            <Button type='submit' sx={{ marginY: 2 }} variant='contained'>
              Submit
            </Button>
          </Grid>
        </Box>
      </Backdrop>
    </LocalizationProvider>
  );
}
