import { Typography } from '@mui/material'
import React from 'react'

const AccodionAmount = ({amount}) => {
  return (
    <>
      <Typography sx={{ width: "16%", fontSize: 15, flexShrink: 0 }}>{amount}</Typography> 
    </>
  )
}

export default AccodionAmount
