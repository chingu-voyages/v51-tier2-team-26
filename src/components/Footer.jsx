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
    mx: 2,
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
        <Box component='section' sx={{ textAlign: 'center', backgroundColor: 'whitesmoke', color: 'black', py: 2 }}>
            <Grid container justifyContent='center'>
                <Grid size={3}>
                    <Typography variant='h6'>GitHub Repository</Typography>
                    <Box sx={{ pt: 0.5 }}>
                        <Link href='https://github.com/chingu-voyages/v51-tier2-team-26' target='_blank' color='inherit' variant='h3' sx={linkSX}>{github}</Link>
                    </Box>
                </Grid>
                <Grid size={3}>
                    <Typography variant='h6'>Terms and Privacy</Typography>
                    <Box sx={{ pt: 1.5 }}>
                        <Link href='https://www.chingu.io/privacy' target='_blank' color='inherit' variant='b3' underline='hover' sx={linkSX}>Privacy Terms</Link>
                    </Box>
                </Grid> 
                <Grid size={3}>
                    <Typography variant='h6'>Social Media</Typography>
                    <Box sx={{ pt: 0.5 }}>
                        <Link href='https://www.linkedin.com/company/chingu-os/' target='_blank' color='inherit' variant='h3' sx={linkSX}>{linkedin}</Link>
                        <Link href='https://twitter.com/ChinguCollabs' target='_blank' color='inherit' variant='h3' sx={linkSX}>{twitter}</Link>
                    </Box>
                </Grid>
            </Grid>
            <Copyright />
        </Box>
    )
}