import GroupCard from '../groupCard/GroupCard';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useState } from 'react';

export default function GroupDisplay( { group }) {
    const [showGroupCard, setShowGroupCard] =  useState(false);
    
    return(
        <Box display='flex' justifyContent='center'>
            { showGroupCard && <GroupCard group={group} showGroupCard={showGroupCard} setShowGroupCard={setShowGroupCard} /> }
            <Box display='flex' alignItems='center' onClick={() => setShowGroupCard(true)} sx={{
                "&:hover":{border: '2px solid #fb8500'}, 
                color: 'black', backgroundColor:'white',
                width: 1,
                height: 150,
                mt: 2,
                p:2,
                boxSizing: 'border-box',
                border:'1px solid gray',
                borderRadius: 4 
            }}>
                <Box sx={{
                    height: 105,
                    width: 115,
                    backgroundColor: '#76C57F',
                    borderRadius: 3
                }}>
                    <Typography variant='h1' sx={{ color: 'white', textAlign:'center' }}>{group.groupName[0]}</Typography>
                </Box>
                <Box sx={{
                    width: 1,
                    height: 1,
                    ml: 2
                }}>
                    <Box display='flex' justifyContent='space-between' alignItems='baseline' sx={{ mb: 1 }}>
                        <Box display='flex' alignItems='baseline'>
                            <Box sx={{ mr: 1 }}>
                                <Typography variant='h5'>{group.groupName}</Typography>
                            </Box>
                            <Box sx={{ color:'gray', fontSize:'0.8em', fontStyle:'italic' }}>
                                #{group.id < 10 ? '00'+group.id : '0'+group.id}
                            </Box>
                        </Box>
                        <Box sx={{ backgroundColor:'#ffa347', px: 1, py:1/2, borderRadius: 3, fontWeight: 'bold' }}>
                            ${group.moneyOwed}
                        </Box>
                    </Box>
                    <Box>{group.description}</Box>
                </Box>
            </Box>
        </Box>
    )
}