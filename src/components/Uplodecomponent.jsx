import React ,{useState}from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Information from '../components/Information'
import ImgUplode from "../components/ImgUplode";
import ExtraUplode from "../components/ExtraUplode";
import ExtimagList from "../components/ExtimagList";



const Uplodecomponent = () => {
    const [value, setValue] = useState(1);
     console.log(value);

    const handleChange = (event, newValue) => {
     
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
        <Tab value= {1} label="Item One" />
        <Tab value={2} label="Item Two" />
        <Tab value={3} label="Item Three" />
      </Tabs>

    </Box>
    <Box>
    {value=== 1 && <Information/>}
    {value=== 2 && <ImgUplode/>}
    {value=== 3 && <ExtimagList/>}
       
    </Box>
    </>
  );
};

export default Uplodecomponent;
