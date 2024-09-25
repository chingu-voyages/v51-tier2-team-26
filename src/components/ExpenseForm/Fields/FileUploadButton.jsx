import { Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function FileUploadButton() {
  return (
    <Grid fullWidth sx={{ display: 'flex', justifyContent: 'center' }}>
      <Button variant='outlined' component='label' fullWidth>
        Upload Receipt Proof
        <input type='file' required hidden />
      </Button>
    </Grid>
  );
}
