import ExpenseDisplayCard from './ExpenseDisplayCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';

const testData = [
  {'id': 1, 'expenseName': "Test1", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 2, 'expenseName': "Test2", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 3, 'expenseName': "Test3", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 4, 'expenseName': "Test4", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 5, 'expenseName': "Test5", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 6, 'expenseName': "Test6", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 7, 'expenseName': "Test7", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 8, 'expenseName': "Test8", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
  {'id': 9, 'expenseName': "Test9", 'description': "This is a test description.", 'categories': ["Cat 1", "Cat 2", "Cat 3"]},
];

export default function ExpenseGrid() {
    const [expenses, setExpenses] = useState([...testData]);

    return (
        <>
        <Box sx={{ mt: 3 }}>
            <Typography sx={{ fontWeight: 'bold' }}>Group Expenses</Typography>
        </Box>
        <Divider />
        <Grid container>
            {expenses.map((expense) => (
                <ExpenseDisplayCard key={expense.id} expense={expense} />
            ))}
        </Grid>
        </>
    )
}