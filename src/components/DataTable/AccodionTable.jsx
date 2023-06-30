import { Accordion, AccordionDetails, LinearProgress, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import TrashBtn from './DeletBtn/TrashBtn';
import EditBtn from './EditBtn/EditBtn';
import { useDispatch, useSelector } from 'react-redux';
import AccodionSummary from './AccodionSummary';
import { getDataHelper } from '../../redux/ExtraRduces/ThankHelpers';



const AccodionTable = () => {
    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(getDataHelper())
    }, []);



    const data = useSelector((state) => state.DETAILS.data);

    return (
        <>
            {data &&
                data.map((data, i) => {
                    return (
                        <>
                            <LinearProgress variant="determinate" value={50} />
                            <Accordion key={i}>
                                {/* all accodion itm */}
                                <AccodionSummary data={data} />
                                <AccordionDetails>
                                    <Typography>{data.discription}</Typography>
                                    <TrashBtn _id={data._id} />
                                    <EditBtn />
                                </AccordionDetails>
                            </Accordion>
                        </>
                    );
                })            
                }
        </>
    )
}

export default AccodionTable
