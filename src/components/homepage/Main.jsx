import GroupDisplay from './GroupDisplay';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Main({ groups }) {
    return(
        <Box sx={{ backgroundColor:'whitesmoke', width: 1, height: 600, px: 6, py: 4, boxSizing: 'border-box' }}>
            <Button variant='contained' sx={{ backgroundColor:'#0F861C', textTransform:'none', fontWeight: 'bold', borderRadius: 2 }}>Add New Group</Button>
            {groups.map((group) => (
                <GroupDisplay key={group.id} group={group} />
            ))}
        </Box>
    )
}