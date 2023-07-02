import { Box } from '@mui/material'
import React from 'react'
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
const MenuAvatar = ({open,handleClick}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
    <Tooltip title="Account settings">
        <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
        >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
    </Tooltip>
</Box>
  )
}

export default MenuAvatar