import { FormControl, TextField } from '@mui/material';

export default function InputField({
  name,
  label,
  value,
  error,
  helperText,
  onChange,
  multiline,
  rows,
}) {
  return (
    <FormControl fullWidth>
      <TextField
        fullWidth
        error={error}
        helperText={helperText}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        required
        size='small'
        multiline={multiline}
        rows={rows}
      />
    </FormControl>
  );
}
