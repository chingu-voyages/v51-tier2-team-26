import ExpenseGrid from './ExpenseGrid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function GroupCard() {
    const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
    
    return(
        // Parent Container  
        <Box sx={{ 
            color: 'black',
            backgroundColor:'white',
            width: 0.9,
            height: 'auto',
            mx: 'auto',
            p:2,
            boxSizing: 'border-box',
            border:'1px solid gray',
            borderRadius: 4
        }}>
            {/**** Group Info ****/}
            <Box display='flex' alignItems='center'>
                {/*** Group Image ***/}
                <Box sx={{ 
                    height: 105,
                    width: 115,
                    backgroundColor: '#76C57F',
                    borderRadius: 3 
                }}>
                    <Typography variant='h1' sx={{ color: 'white', textAlign:'center' }}>T</Typography>
                </Box>
                {/* End Group Image */}
                {/*** Group Details ***/}
                <Box sx={{
                    width: 1,
                    height: 1,
                    ml: 2 
                }}>
                    <Box display='flex' justifyContent='space-between' alignItems='baseline' sx={{ mb: 1 }}>
                        <Box display='flex' alignItems='baseline'>
                            <Box>
                                <Typography variant='h5'>Test4</Typography>
                            </Box>
                            <Box sx={{ mx: 1.1 }}>
                                <Typography sx={{ fontSize: '1.7em', color:'#0F861C' }}>{editIcon}</Typography>
                            </Box>
                            <Box sx={{ color:'gray', fontSize:'0.8em', fontStyle:'italic' }}>
                                #004
                            </Box>
                        </Box>
                        <Box sx={{ backgroundColor:'#FFA347', px: 1, py:1/2, borderRadius: 3, fontWeight: 'bold' }}>
                            $200
                        </Box>
                    </Box>
                    <Box>Test Description</Box>
                    <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
                        <Typography variant='b2'>Nancy, Jim, Franklin, Billy, Joe</Typography>
                        <Button variant='contained' sx={{ backgroundColor:'#fb8500', textTransform:'none', fontWeight:'bold' }}>Add New Expense</Button>
                    </Box>
                </Box>
                {/* End Group Details */}
            </Box>
            {/* End Group Info */}
            {/**** Expense Display ****/}
            <ExpenseGrid />
        </Box>
    )
}