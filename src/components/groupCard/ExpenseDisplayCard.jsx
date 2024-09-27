import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ExpenseDisplayCard( {expense} ) {
    const categories = [...expense.categories]

    return (
        <Grid size={3} sx={{
            my:1,
            px:2,
            py:1,
            border: '1px solid grey',
            borderRadius: 3
        }}>
            <Typography variant='h7' fontWeight='bold'>{expense.expenseName}</Typography>
            <Typography>
                {categories}
            </Typography>
            <Typography variant='b1'>{expense.description}</Typography>
        </Grid>
    )
}