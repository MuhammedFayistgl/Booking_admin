import { IconButton } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import React from 'react'
import { useDispatch } from 'react-redux';
import { setDeletedata, setOpen } from '../../../redux/Slices/TrashSlice';

const TrashBtn = ({ _id }) => {

    const Dispatch = useDispatch()

    return (
        <>
            <IconButton key={_id} color="error" variant="contained" aria-label="delete">
                <DeleteIcon
                    onClick={() => {
                        Dispatch(setOpen(true))
                        Dispatch(setDeletedata(_id))
                    }}
                />
            </IconButton>
        </>
    )
}

export default TrashBtn
