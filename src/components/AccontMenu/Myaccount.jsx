import { Avatar, MenuItem } from '@mui/material'
import React from 'react'

const Myaccount = ({handleClose}) => {
  return (
    <MenuItem onClick={handleClose}>
    <Avatar /> My account
</MenuItem>
  )
}

export default Myaccount