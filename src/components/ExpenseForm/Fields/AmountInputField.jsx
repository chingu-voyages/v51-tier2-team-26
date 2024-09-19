import { useState } from 'react';
import TextField from '@mui/material/TextField';

export default function AmountInputField() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    let inputValue = event.target.value;

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

    setValue(formattedValue);
  };

  return (
    <TextField
      label='Total Amount'
      required
      value={value}
      onChange={handleChange}
      placeholder='$0.00'
      fullWidth
    />
  );
}
