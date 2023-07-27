import React, { useState } from 'react'
import Tab from '@mui/material/Tab';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TabPanel from '@mui/lab/TabPanel';
import PersonIcon from '@mui/icons-material/Person';
import Navbar from '../../components/NavBar/Navbar';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Signup from '../../components/signup/Signup';


function SignupPage() {
    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Navbar/>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ marginTop: '50px' }} centered>
            <Tab icon={<PersonIcon />} label="USER" value="1" />
            <Tab icon={<AdminPanelSettingsIcon />} label="ADMIN" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Signup client='user' /></TabPanel>
        <TabPanel value="2"><Signup client='admin'/></TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default SignupPage