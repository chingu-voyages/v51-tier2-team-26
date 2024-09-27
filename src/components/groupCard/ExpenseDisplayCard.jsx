import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

export default function ExpenseDisplayCard( {expense} ) {
        return (
            <Grid size={3}>
                <Typography>{expense.ExpenseName}</Typography>
            </Grid>
    )
}