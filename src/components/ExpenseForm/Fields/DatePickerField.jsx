import PropTypes from 'prop-types';
import { FormControl, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export default function DatePickerField({ value, onChange }) {
  return (
    <FormControl fullWidth>
      <DatePicker
        label='Date'
        value={value}
        onChange={onChange}
        slots={{ textField: (params) => <TextField {...params} /> }}
      />
    </FormControl>
  );
}

DatePickerField.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
