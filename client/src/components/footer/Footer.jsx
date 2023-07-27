import React from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import './footer.css'

function Footer() {
  return (
    <div className='footerMain'>
      <Box sx={{ flexGrow: 1 }}>
      <Grid sx={{mx:3}} container spacing={1}>
        <Grid item xs={6}>
          <h4>News & Updates</h4>
          <p>We’d love it if you subscribed to our <br></br> newsletter! You’ll love it too.</p>
          <input className='newsletterInput' placeholder='Email..'></input>
          
        </Grid>
        <Grid item xs={6}>
          <h4>Contact</h4>
          <p>Stay in touch with everything PageOne, follow us on social media<br></br> and learn about new promotions.</p>
          <div>
            <Link className='IconButton'><TwitterIcon/></Link><Link className='IconButton'><InstagramIcon/></Link><Link className='IconButton'><FacebookIcon/></Link>
          </div>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{width:'100%',backgroundColor:'black'}}>
      <p className='copyrightP'>© 2023 PageOne, ALL RIGHTS RESERVED</p>
    </Box>

    </div>
  )
}

export default Footer