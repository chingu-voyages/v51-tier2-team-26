import { Grid2, Button } from '@mui/material';

export default function FileUploadButton() {
  return (
    <Grid2
      item
      xs={6}
      alignItems='center'
      justifyContent='center'
      sx={{ height: '100%' }}>
      <Button variant='text' component='label'>
        Upload File
        <input type='file' hidden />
      </Button>
    </Grid2>
  );
}
