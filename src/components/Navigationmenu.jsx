import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import SettingsIcon from "@mui/icons-material/Settings";
import Person2Icon from "@mui/icons-material/Person2";
import React from "react";

const Navigationmenu = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        height:'2ch',
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            mt: 1,
            ml: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Search Box */}
          <Search  >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             
              placeholder="Search…"
              inputProps={{ "aria-label": "search", }}
              
            />
          </Search>
          {/* icones */}
          <Box display="flex" flexDirection="row" sx={{ mr: 3 }}>
            <DarkModeSharpIcon />
            <NotificationsSharpIcon />
            <SettingsIcon />
            <Person2Icon />
          </Box>
        </Box>
        <Box sx={{ ml: 2, mt: 1 }}>
          <Typography variant="h6">DASHBOARD</Typography>
          <Typography  variant="subtitle1">welcome to your dashboard</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Navigationmenu;
