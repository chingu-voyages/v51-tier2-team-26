import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'start', p: 2, mr: 4, ml: 4, backgroundColor:'white', width: '50%', my: 0, mx: 'auto' }} >
      <Typography variant='h3' color="black">Oops!</Typography>
      <Typography variant="h4" color="black">Sorry, an unexpected error has occurred.</Typography>
      <Typography color="black">
        <i>{error.statusText || error.message}</i>
      </Typography>
    </Box>
  );
}