import { useState } from 'react';
import { Divider, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ParticipantInput from './ParticipantInput';

export default function ParticipantsSection() {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: 'flex', flexDirection: 'column', paddingX: '30px' }}>
      <Grid
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
      </Grid>
      <ParticipantInput name='John Doe' contribution={Number('40')} />
      <ParticipantInput name='Jane Doe' contribution={Number('55')} />
      <ParticipantInput name='Jerry' contribution={Number('5')} />
    </Grid>
  );
}
