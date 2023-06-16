import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDeletedata, setOpen } from '../../../redux/Slices/TrashSlice';
import { OneitemTrash } from '../../../redux/ExtraRduces/TrashItemeThunk';
import { getDataHelper } from '../../../redux/ExtraRduces/ThankHelpers';

const Confom = () => {
    const Dispatch = useDispatch()
    const deletState = useSelector((state) => state.DeleteState);

    return (
        <>
            <Dialog open={deletState.open} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"are you sure you want to delete this item?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Do you agree that if is deleted , the data will be deleted from the database itself !!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="success"
                        autoFocus
                        onClick={() => {
                            Dispatch(setOpen(false)),
                                Dispatch(setDeletedata(''));
                        }}
                    >
                        Disagree
                    </Button>
                    <Button
                        color="error"
                        onClick={() => {
                            Dispatch(setOpen(false)),
                                Dispatch(OneitemTrash(deletState?.trashID))
                            Dispatch(getDataHelper())
                        }
                        }
                    >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Confom
