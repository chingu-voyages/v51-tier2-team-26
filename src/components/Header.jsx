import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../img/divvy-up-logo.png';

export default function Header() {
    return(
        <Box component='section' display='flex' justifyContent='space-between' sx={{ backgroundColor: '#0F861C', color: 'white', px:5, py:3, mb: 5 }}> {/* Remove mb when rest of homepage is finished */}
            <img src={logo} alt='Divvy Up logo' height='120px' width='auto' />
            <Typography variant='h1'>Divvy Up</Typography>
        </Box>
    )
}