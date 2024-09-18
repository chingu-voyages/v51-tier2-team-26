import { useState, forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';
import TextField from '@mui/material/TextField';

const NumericFormatCustom = forwardRef(function NumericFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix='$'
      decimalScale={2}
      fixedDecimalScale={true}
      allowNegative={false}
    />
  );
});

export default function FormattedInputs() {
  const [value, setValue] = useState({
    amount: '',
  });

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <TextField
      label='Total Amount'
      required
      placeholder='$25.99'
      value={value.amount}
      onChange={handleChange}
      name='amount'
      id='formatted-amount-input'
      slotProps={{
        input: {
          inputComponent: NumericFormatCustom,
        },
      }}
    />
  );
}
