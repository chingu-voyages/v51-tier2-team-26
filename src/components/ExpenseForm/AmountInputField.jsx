import { useState } from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import TextField from '@mui/material/TextField';

function NumericFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      thousandSeparator
      valueIsNumericString
      prefix='$'
      decimalScale={2}
      fixedDecimalScale
      allowNegative={false}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
    />
  );
}

NumericFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default function FormattedInputs() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      label='Total Amount'
      required
      placeholder='$25.99'
      value={value}
      onChange={handleChange}
      name='amount'
      slotProps={{
        input: {
          inputComponent: NumericFormatCustom,
        },
      }}
    />
  );
}
