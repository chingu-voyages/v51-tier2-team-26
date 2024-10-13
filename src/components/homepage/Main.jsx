import GroupDisplay from './GroupDisplay';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '../Modal/Modal';
import GroupForm from '../GroupForm/GroupForm';

export default function Main({ groups }) {
    const style = { backgroundColor:'#0F861C', textTransform:'none', fontWeight: 'bold', borderRadius: 2 }
    
    return(
        <Box sx={{ backgroundColor:'whitesmoke', width: 1, height: 600, px: 6, py: 4, boxSizing: 'border-box' }}>
            <Modal Form={GroupForm} btnText={"Add New Group"} style={style} variant={'contained'} />

            {groups.map((group) => (
                <GroupDisplay key={group.id} group={group} />
            ))}
        </Box>
    )
}