import ExpenseGrid from './ExpenseGrid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '../../Hooks/useClickOutside.jsx';

export default function GroupCard({ group, showGroupCard, setShowGroupCard }) {
    const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;

    const groupCardRef = useClickOutside(() => setShowGroupCard(false));

    return(
        <>
            {showGroupCard && ( 
                // Parent Container
                <Box ref={groupCardRef} sx={{ 
                    color: 'black',
                    backgroundColor:'white',
                    width: 0.9,
                    p:2,
                    boxSizing: 'border-box',
                    border:'1px solid gray',
                    borderRadius: 4,
                    position: 'absolute',
                    top: 185,
                    boxShadow: '3px 3px 4px grey',
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
                            <Typography variant='h1' sx={{ color: 'white', textAlign:'center' }}>{group.groupName[0]}</Typography>
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
                                        <Typography variant='h5'>{group.groupName}</Typography>
                                    </Box>
                                    <Box sx={{ mx: 1.1 }}>
                                        <Typography sx={{ fontSize: '1.7em', color:'#0F861C' }}>{editIcon}</Typography>
                                    </Box>
                                    <Box sx={{ color:'gray', fontSize:'0.8em', fontStyle:'italic' }}>
                                        #{group.id < 10 ? '00'+group.id : '0'+group.id}
                                    </Box>
                                </Box>
                                <Box sx={{ backgroundColor:'#FFA347', px: 1, py:1/2, borderRadius: 3, fontWeight: 'bold' }}>
                                    ${group.moneyOwed}
                                </Box>
                            </Box>
                            <Box>{group.description}</Box>
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
            )}
        </>
    )
}