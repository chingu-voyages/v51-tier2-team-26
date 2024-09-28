import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CategoryDisplay ( {category} ) {

    return (
        <Grid sx={{
            backgroundColor: '#FFA347',
            borderRadius: 3,
            px:1
        }}>
            <Typography variant='b1' fontWeight='600'>{category}</Typography>
        </Grid>
    )
}