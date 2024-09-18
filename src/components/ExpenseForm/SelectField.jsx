import { FormControl, InputLabel, Select, FormHelperText } from '@mui/material';

export default function SelectField({ name, label, value, error, onChange }) {
  return (
    <FormControl fullWidth error={error} size='small'>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        native
        id={name}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        required
        fullWidth>
        <option aria-label='None' value='' />
        <option value='Dining'>Dining</option>
        <option value='Groceries'>Groceries</option>
        {/* Add more categories as needed */}
      </Select>
      {error && <FormHelperText>{label} is required</FormHelperText>}
    </FormControl>
  );
}
