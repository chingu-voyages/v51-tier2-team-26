import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const github = <FontAwesomeIcon icon={faGithub} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />
const twitter = <FontAwesomeIcon icon={faTwitter} />

const linkSX = {
    "&:hover":{color:'#fb8500'},
    mx: 1,
    fontWeight: "regular"
}

function Copyright() {
  return (
    <Typography variant="body2" sx={{ mt: 1 }}>
      {'Copyright ©'}
      &nbsp;
      {new Date().getFullYear()}
      &nbsp;
      {'| Divvy Up'}
    </Typography>
  );
}

export default function Footer() {
    return(
        <Box component='section' sx={{ textAlign: 'center', backgroundColor: 'whitesmoke', color: 'black', pt: 4, pb: 2 }}>
            <Grid container justifyContent='center'>
                <Grid size={1}>
                    <Typography variant='h7'>GitHub Repository</Typography>
                    <Box sx={{ pt: 0.5 }}>
                        <Link href='https://github.com/chingu-voyages/v51-tier2-team-26' target='_blank' color='inherit' variant='h4' sx={linkSX}>{github}</Link>
                    </Box>
                </Grid>
                <Grid size={1} sx={{ mx: 2 }}>
                    <Typography variant='h7'>Terms and Privacy</Typography>
                    <Box sx={{ pt: 0.75 }}>
                        <Link href='https://www.chingu.io/privacy' target='_blank' color='inherit' underline='hover' fontSize='0.9em' sx={linkSX}>Privacy Terms</Link>
                    </Box>
                </Grid> 
                <Grid size={1}>
                    <Typography variant='h7'>Social Media</Typography>
                    <Box sx={{ pt: 0.5 }}>
                        <Link href='https://www.linkedin.com/company/chingu-os/' target='_blank' color='inherit' variant='h4' sx={linkSX}>{linkedin}</Link>
                        <Link href='https://twitter.com/ChinguCollabs' target='_blank' color='inherit' variant='h4' sx={linkSX}>{twitter}</Link>
                    </Box>
                </Grid>
            </Grid>
            <Copyright />
        </Box>
    )
}