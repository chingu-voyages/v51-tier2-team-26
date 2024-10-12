import TextField from '@mui/material/TextField';
import { fieldToTextField } from 'formik-mui';
import { useCallback } from 'react';

function TextFieldWrapper(props) {
  console.log(props.field)
  
  return <TextField {...fieldToTextField(props)}  />;
}

export default TextFieldWrapper