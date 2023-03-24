import React ,{useState}from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Information from '../components/Information'
import ImgUplode from "./imgUplode";



const Uplodecomponent = () => {
    const [value, setValue] = useState('one');
    console.log(value);

    const handleChange = (event, newValue) => {
        console.log(event, newValue);
      setValue(newValue);
    };
  
  return (
   
    
    <>
     <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>

    </Box>
    <Box>
    {value=="one"&& <Information/>}
    {value==="two"&& <ImgUplode/>}
    {value==="three"&& <ImgUplode/>}
       
    </Box>
    </>
  );
};

export default Uplodecomponent;
