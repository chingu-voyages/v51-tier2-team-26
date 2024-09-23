import GroupDisplay from './GroupDisplay';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Main({ groups }) {
    return(
        <Box sx={{ backgroundColor:'whitesmoke', width: 1, height: 600, px: 6, py: 4, boxSizing: 'border-box' }}>
            <Button variant='contained' sx={{ backgroundColor:'#ffa347', textTransform:'none', fontWeight: 'bold' }}>Add New Group</Button>
            {groups.map((group) => (
                <GroupDisplay key={group.id} group={group} />
            ))}
        </Box>
    )
}