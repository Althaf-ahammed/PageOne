import React from 'react'
import Button from '@mui/material/Button';
import image2 from '../../Assets/home-5-slider-image-2 (3).png'
import './cover.css'
import { Link } from 'react-router-dom';

function Cover() {
  return (
    <div className='cover'>
        <img className='coverImage2' src={image2} alt='coverImage'></img>
        <div className='coverSlogen'>
            <span className='coverSpan' >FOREIGN WRITERS</span>
            <h1 className='coverheading'>Best bookshelf in town</h1>
            <p>Turn the Page to Imagination: PageOne,<br></br> Your Online Book Destination.</p>
            <Button id='coverButton' sx={{border:'0.3px black solid'}} color="inherit" href='/aboutUs' >READ MORE</Button>
        </div>
    </div>
  )
}

export default Cover