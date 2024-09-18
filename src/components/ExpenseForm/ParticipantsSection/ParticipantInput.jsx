import PropTypes from 'prop-types';
import { Grid2, TextField } from '@mui/material';

export default function ParticipantInput({ name, contribution }) {
  return (
    <Grid2>
      <TextField label='Name of Participant'>{name}</TextField>
      <TextField label='% of Contribution'>{contribution}</TextField>
    </Grid2>
  );
}

ParticipantInput.propTypes = {
  name: PropTypes.string.isRequired,
  contribution: PropTypes.number.isRequired,
};
