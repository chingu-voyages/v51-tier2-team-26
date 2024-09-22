import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../img/divvy-up-logo.png';

export default function Header() {
    return(
        <Box component='section' display='flex' justifyContent='space-between' alignItems='center' sx={{ backgroundColor: '#3B3B3B', color: 'white', px:5, py:3 }}>
            <img src={logo} alt='Divvy Up logo' height='140px' width='auto' />
            <Box display='flex'>
                <Box component='span' 
                    sx={{ 
                        backgroundColor: '#0F861C',
                        border: 3,
                        borderRight: 0,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        pr:1,
                        pl: 1.5,
                        pb: 1,
                    }}
                >
                    <Typography variant='h1' sx={{color:'white'}}>Divvy</Typography>
                </Box>
                <Box component='span' 
                    sx={{ 
                        backgroundColor: '#76C57F',
                        border: 3,
                        borderLeft: 0,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        pr:1.5,
                        pb:1,
                    }}
                >
                    <Typography variant='h1' sx={{color:'white'}}>Up</Typography>
                </Box>
            </Box>
        </Box>
    )
}