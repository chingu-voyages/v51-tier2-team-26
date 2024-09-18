import PropTypes from 'prop-types';
import { FormControl, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function ParticipantInput({ name, contribution }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField label='Name of Participant' fullWidth value={name} />
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <TextField label='% of Contribution' fullWidth value={contribution} />
        </FormControl>
      </Grid>
    </Grid>
  );
}

ParticipantInput.propTypes = {
  name: PropTypes.string.isRequired,
  contribution: PropTypes.number.isRequired,
};
