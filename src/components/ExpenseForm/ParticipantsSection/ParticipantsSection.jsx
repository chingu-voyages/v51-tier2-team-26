import { useState } from 'react';
import { Grid2, Divider, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ParticipantInput from './ParticipantInput';

export default function ParticipantsSection() {
  const [participants, setPartcipants] = useState([
    { name: '', contribution: '' },
  ]);

  return (
    <Grid2
      container
      spacing={2}
      sx={{ display: 'flex', flexDirection: 'column', paddingX: '30px' }}>
      <Grid2
        container
        alignItems='center'
        sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
        <Divider
          textAlign='left'
          sx={{ color: '#040504', marginY: 2, flexGrow: 1 }}>
          Participants
        </Divider>
        <IconButton aria-label='add participant' size='large'>
          <AddCircleIcon fontSize='inherit' />
        </IconButton>
      </Grid2>
      <ParticipantInput name='default' contribution='10' />
    </Grid2>
  );
}
