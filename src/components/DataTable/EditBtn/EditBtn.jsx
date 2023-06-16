import { IconButton } from '@mui/material'
import EditIcon from "@mui/icons-material/Edit";
import React from 'react'
import { useDispatch } from 'react-redux';

const EditBtn = () => {
    const Dispatch = useDispatch()
    return (
        <>
            <IconButton onClick={() =>
                //   setInputdata(data)

                ""
            } color="warning" variant="contained" aria-label="delete">
                <EditIcon />
            </IconButton>
        </>
    )
}

export default EditBtn
