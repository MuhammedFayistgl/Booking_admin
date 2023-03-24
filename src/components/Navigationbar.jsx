import React from "react";

import MenuIcon from "@mui/icons-material/Menu";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DashboardIcon from '@mui/icons-material/Dashboard';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import ContactsTwoToneIcon from '@mui/icons-material/ContactsTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';
import ContactSupportTwoToneIcon from '@mui/icons-material/ContactSupportTwoTone';
import BarChartTwoToneIcon from '@mui/icons-material/BarChartTwoTone';
import PieChartOutlineTwoToneIcon from '@mui/icons-material/PieChartOutlineTwoTone';
import TimelineTwoToneIcon from '@mui/icons-material/TimelineTwoTone';
import StackedLineChartTwoToneIcon from '@mui/icons-material/StackedLineChartTwoTone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from "react-router-dom";

const Navigationbar = () => {
  const { collapsed, collapseSidebar } = useProSidebar();

  return (
    <div>
      <Sidebar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 1,
          }}
        >
          {!collapsed && <Typography>ASMINS</Typography>}

          <IconButton
            onClick={() => collapseSidebar()}
            size="small"
            edge="end"
            color="inherit"
            sx={{ mr: 2 }}
          >
            {!collapsed ? <MenuIcon /> : <ArrowRightIcon />}
          </IconButton>
        </Box>

        <Menu>  
        <MenuItem component={<Link to={'/'} />}  icon={<DashboardIcon/>} >Dashboard</MenuItem> 
          <Typography
            fontWeight={600}
            style={{ opacity: collapsed ? 0 : 0.7, marginLeft:15 }}
          >
            Data
          </Typography>
          <Menu>
        
          <MenuItem icon={<Groups2TwoToneIcon/>} >Manage Team</MenuItem> 
          <MenuItem icon={<ContactsTwoToneIcon/>} >Contact Information</MenuItem> 
          <MenuItem icon={<ReceiptTwoToneIcon/>} >Invoice Balence</MenuItem> 
          <Typography
            fontWeight={600}
            style={{ opacity: collapsed ? 0 : 0.7, marginLeft:15 }}
          >
           Pages
          </Typography>
          <MenuItem icon={<Person2TwoToneIcon/>} >Profile From</MenuItem> 
          <MenuItem component={<Link to={'/uplode'}/>} icon={<CloudUploadIcon/>} >Uplode</MenuItem> 
          <MenuItem icon={<CalendarTodayTwoToneIcon/>} >Calnder</MenuItem> 
          <MenuItem icon={<ContactSupportTwoToneIcon/>} >FAQ page</MenuItem> 
          <Typography
            fontWeight={600}
            style={{ opacity: collapsed ? 0 : 0.7, marginLeft:15 }}
          >
           Charts
          </Typography>
          <MenuItem component={<Link to={'/Barchart'}/>} icon={<BarChartTwoToneIcon/>} >Bar Chart</MenuItem> 
          <MenuItem component={<Link to={'/pie'} />} icon={<PieChartOutlineTwoToneIcon/>} >Pie Chart</MenuItem> 
          <MenuItem component={<Link to={'/linechart'} />} icon={<TimelineTwoToneIcon/>} >Line Chart</MenuItem> 
          <MenuItem component={<Link to={'/geography'} />} icon={<StackedLineChartTwoToneIcon/>} >geography Chart</MenuItem> 

          </Menu>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default Navigationbar;
