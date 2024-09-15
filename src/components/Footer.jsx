import '../css/Footer.css';
import github from '../img/github-logo.png';
import linkedin from '../img/linkedin-logo.png';
import twitter from '../img/twitter-logo.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__links'>
                <div className='footer__link-div'>
                    <h2>Github Repository</h2>
                    <div className='footer__repo-link'>
                        <a href='https://github.com/chingu-voyages/v51-tier2-team-26' target='_blank'>
                            <img src={github} alt='Github logo' /></a>
                    </div>
                </div>
                <div className='footer__link-div footer__terms-and-privacy'>
                    <h2>Terms & Privacy</h2>
                    <p className='footer__privacy-terms'>
                        <a href='https://www.chingu.io/privacy' target='_blank'>
                            Privacy Terms</a>
                    </p>
                </div>
                <div className='footer__link-div'>
                    <h2>Social Media</h2>
                    <div className='footer__social-links'>
                        <a href='https://www.linkedin.com/company/chingu-os/' target='_blank'>
                            <img src={linkedin} alt='LinkedIn logo' /></a>
                        <a href='https://twitter.com/ChinguCollabs' target='_blank'>
                            <img src={twitter} alt='Twitter logo' /></a>
                    </div>
                </div>
            </div>
            <div className='footer__copyright'>
                © 2024 | Divvy Up
            </div>
        </footer>
    )
}

export default Footer;