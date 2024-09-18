import PropTypes from 'prop-types';
import { FormControl, TextField } from '@mui/material';

export default function InputField({
  name,
  label,
  value,
  placeholder,
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
        placeholder={placeholder}
        onChange={onChange}
        required
        size='small'
        multiline={multiline}
        rows={rows}
      />
    </FormControl>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

InputField.defaultProps = {
  placeholder: '',
  error: false,
  helperText: '',
  multiline: false,
  rows: 1,
};
