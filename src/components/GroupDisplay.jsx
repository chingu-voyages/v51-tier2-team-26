import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

export default function GroupDisplay( { group }) {
    return(
        <Box sx={{ color: 'black', backgroundColor:'whitesmoke', width: 1, height: 150, mt: 2, p:2, boxSizing: 'border-box', border:'1px solid gray', borderRadius: 4 }}>
            <Box display='flex' justifyContent='space-between' alignItems='baseline' sx={{ mb: 1 }}>
                <Box display='flex' alignItems='baseline'>
                    <Box sx={{ mr: 1 }}>
                        <Typography variant='h5'>{group.groupName}</Typography>
                    </Box>
                    <Box sx={{ color:'gray', fontSize:'0.8em', fontStyle:'italic' }}>
                        #{group.id}
                    </Box>
                </Box>
                <Box sx={{ backgroundColor:'#76C57F', px: 1, py:1/2, borderRadius: 3, fontWeight: 'bold' }}>${group.moneyOwed}</Box>
            </Box>
            <Box>{group.description}</Box>
        </Box>
    )
}