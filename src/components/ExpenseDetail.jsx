import { Box, Grid2, TableContainer, Typography,TableHead,TableCell,TableRow, TableBody, Paper, Table } from '@mui/material'

export default function ExpenseDetail({data}) {

  function getName(acc, name){
    return acc + name + ', '
  }

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'start', p: 2, backgroundColor:'white' }} >
      <Grid2 container spacing={2} sx={{width: '50%', my: 0, mx: 'auto'}} direction={'column'} >
        <Grid2 container size={12} sx={{  pb: 1, borderBottom: '1px solid black' }} >
          <Grid2 size={8}  display={"flex"} flexDirection={'column'} justifyContent={'space-between'}>
            <Typography variant='h3' color="black">{data.groupName}</Typography> 
            <Typography variant='h4' color="black">ID: {data.id}</Typography>
          </Grid2>
          <Grid2  size={4} sx={{textAlign: 'end'}} display={"flex"} flexDirection={'column'} justifyContent={'space-between'}>
            <Typography color="black">Created on: date</Typography> 

            <Typography color="black">Members: {data.groupMembers.reduce(getName, '').slice(0, -2)}</Typography> 
          </Grid2>          
        </Grid2>

        <Box>
          <Typography color="black">
            {data.description}
          </Typography>
        </Box>
        
        <Box>
          <Typography variant='h5' color="black">Members:</Typography>
          <TableContainer component={Paper} sx={{ maxWidth: 300 }}>
          <Table aria-label="simple table">
            <TableHead>
                <TableRow >
                  <TableCell >Name</TableCell>
                  <TableCell align="right">Contribution %</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.groupMembers.map( (name) => (
                  <TableRow
                    key={name}
                  >
                    <TableCell>
                    {name}
                  </TableCell>
                  <TableCell align="right">
                    ??? %
                  </TableCell>
                  </TableRow>
                ))}
              </TableBody>
          </Table>
          </TableContainer>
        </Box>
      </Grid2>
    </Box>
  )
}

