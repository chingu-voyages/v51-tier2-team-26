import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function GroupCard() {
    const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
    // const groupMembers = [...group.groupMembers];
    // console.log(groupMembers);
    
    return(
        <Box display='flex' alignItems='center' sx={{ "&:hover":{border: '3px solid #0F861C'}, color: 'black', backgroundColor:'white', width: 1, height: 150, mt: 2, p:2, boxSizing: 'border-box', border:'1px solid gray', borderRadius: 4 }}>
            <Box sx={{ height: 115, width: 115, backgroundColor: '#0F861C', borderRadius: 3 }}>
                <Typography variant='h1' sx={{ color: 'white', textAlign:'center' }}>T</Typography>
            </Box>
            <Box sx={{ width: 1, height: 1, ml: 2 }}>
                <Box display='flex' justifyContent='space-between' alignItems='baseline' sx={{ mb: 1 }}>
                    <Box display='flex' alignItems='baseline'>
                        <Box sx={{ mr: 1 }}>
                            <Typography variant='h5'>Test4</Typography>
                        </Box>
                        <Box>
                            <Typography>{editIcon}</Typography>
                        </Box>
                        <Box sx={{ color:'gray', fontSize:'0.8em', fontStyle:'italic' }}>
                            #004
                        </Box>
                    </Box>
                    <Box sx={{ backgroundColor:'#76C57F', px: 1, py:1/2, borderRadius: 3, fontWeight: 'bold' }}>
                        $200
                    </Box>
                </Box>
                <Box>Test Description</Box>
            </Box>
        </Box>
    )
}