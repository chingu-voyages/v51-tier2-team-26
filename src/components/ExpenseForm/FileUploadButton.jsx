import { Grid2, Button } from '@mui/material';

export default function FileUploadButton() {
  return (
    <Grid2 fullWidth sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant='outlined' component='label' fullWidth>
        Upload Receipt Proof
        <input type='file' required hidden />
      </Button>
    </Grid2>
  );
}
