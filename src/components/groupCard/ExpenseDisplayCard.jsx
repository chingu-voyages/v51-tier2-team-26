import CategoryDisplay from './CategoryDisplay';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ExpenseDisplayCard( {expense} ) {
    const categories = [...expense.categories]

    return (
        <Grid size={3} sx={{
            "&:hover":{border: '2px solid #fb8500'},
            my:1,
            px:2,
            py:1,
            border: '1px solid grey',
            borderRadius: 3,
            boxShadow: '0px 2px 3px grey',
        }}>
            <Typography variant='h7' fontWeight='bold'>{expense.expenseName}</Typography>
            <Grid container>
                {categories.map((category, index) => (
                <CategoryDisplay key={index} category={category} />
            ))}
            </Grid>
            <Typography variant='b1'>{expense.description}</Typography>
        </Grid>
    )
}