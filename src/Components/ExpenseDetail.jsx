import { Box, Grid2, Typography } from '@mui/material'
import receipt from '../img/receipt.png'

const propsObj = {
    groupID: "0123456789",
    groupName: "SPI Trip",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi purus, rhoncus ac nunc vitae, mattis commodo eros. Cras luctus mollis arcu, eget porta odio viverra gravida. In facilisis vestibulum elit at pellentesque. Vestibulum ac porta ipsum. Phasellus sit amet leo tellus. Vivamus mattis maximus nunc, eu dapibus arcu sollicitudin sollicitudin. Suspendisse suscipit nulla justo, a fringilla sem maximus volutpat. ",
    expense: 500.00,
    participants: [ 
        { name: "Hector", percent: 25},
        { name: "Ivan", percent: 25},
        { name: "Sam", percent: 25},
        { name: "Josh", percent: 25}
    ],
    date: new Date().toLocaleString(),
    category: 'Vacation',
}

export default function ExpenseDetail() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'start' }}>
      <Grid2 container spacing={2} >
        <Grid2 container size={12} sx={{  pb: 1, borderBottom: '1px solid black' }} >
          <Grid2 size={8}>
            <Typography variant='h3'>{propsObj.groupName}</Typography> 
            <Typography variant='h6'>ID: {propsObj.groupID}</Typography>
          </Grid2>
          <Grid2 size={4} sx={{textAlign: 'end'}}>
            <Typography>Created on: {propsObj.date}</Typography> 
          </Grid2>          
        </Grid2>

        <Box>
          {propsObj.description}
        </Box>

      </Grid2>
    </Box>
  )
}
