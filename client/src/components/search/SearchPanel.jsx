import React, { useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.80),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.90),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  

function SearchPanel() {
    const [searchInput, setSearchInput] = useState({})
  
    const handleChange = (e)=>{
      let name = e.target.name
      let value = e.target.value
      setSearchInput({...searchInput,[name]:value})
    }
    console.log(searchInput);
  return (
    <div>
        <Search>
            <Link to={`/search/${searchInput.Title}`}><Button id='searchButton' >
              <SearchIconWrapper>
              <SearchIcon className='searchButtonIcon'/>
            </SearchIconWrapper>
            </Button></Link>
            <StyledInputBase
              placeholder="Search book…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
              name='Title'
            />
          </Search>
    </div>
  )
}

export default SearchPanel