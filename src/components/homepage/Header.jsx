import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../img/divvy-up-logo.png';

export default function Header() {
    return(
        <Box component='section' display='flex' justifyContent='space-between' alignItems='center' sx={{ backgroundColor: 'whitesmoke', color: 'black', px:6, py:3 }}>
            <img src={logo} alt='Divvy Up logo' height='100px' width='auto' />
            <Box display='flex'>
                <Box component='span' 
                    sx={{ 
                        backgroundColor: '#0F861C',
                        border: 2,
                        borderRight: 0,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        pr:0.75,
                        pl: 1.5,
                    }}
                >
                    <Typography variant='h2' sx={{color:'white'}}>Divvy</Typography>
                </Box>
                <Box component='span' 
                    sx={{ 
                        backgroundColor: '#76C57F',
                        border: 2,
                        borderLeft: 0,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        pr:1.5,
                        pl: 0.3
                    }}
                >
                    <Typography variant='h2' sx={{color:'white'}}>Up</Typography>
                </Box>
            </Box>
        </Box>
    )
}