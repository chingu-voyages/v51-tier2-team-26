import { FormControl, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function DatePickerField({ value, onChange }) {
  return (
    <FormControl fullWidth>
      <DatePicker
        label='Date'
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} size='small' />}
      />
    </FormControl>
  );
}
