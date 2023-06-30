import React, { useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import toast, { Toaster } from "react-hot-toast";
import { DeleteimageHandler, EditimageHandler } from "../Helper/CredOparations";
import ExtraUplode from "./ExtraUplode";
import { useSelector } from "react-redux";
import Proimgbutton from "./Proimgbutton";
import TablePagination from '@mui/material/TablePagination';





const ImgUplode = () => {
  /** STATE */
  const [tableData, setTableData] = useState();
  const [open, setOpen] = React.useState(false);
  const [deletedData, setdeletedData] = React.useState({});
  const [editData, setEditData] = React.useState({});
  const [erorr, setErorr] = React.useState('');
  const data = useSelector((state) => state.DETAILS.data);


  // console.log('tableDatan',tableData);
  React.useEffect(() => {
    !tableData &&
      fechData();
  }, []);
  const fechData = async () => {
    axios
      .get("http://localhost:5000/admin/getallDeteals")
      .then((response) => {
        setTableData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleChange(id, event) {

  }


  const handleAction = () => {
    setOpen(false);

    if (editData) {
      console.log('you clicked the edit button');
      setErorr(EditimageHandler(editData))
    } else {
      console.log('you clicked the delete button');
      setErorr(DeleteimageHandler(deletedData))
    }


  };

  return (
    <div>
      <Toaster />
      {/* Teble */}


      <TableContainer sx={{ borderCollapse: 'separate', tableLayout: 'fixed', maxHeight: 500, maxWidth: 1000, overflow: 'scroll' }} component={Paper}>
        <Table size="small" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">PROFILE UPLODE</TableCell>
              <TableCell align="center">ID</TableCell>
              <TableCell align="left">PROFILE</TableCell>
              <TableCell align="left">EXTRA IMSGE UPLODE</TableCell>
              <TableCell align="left">IMAGE COUNT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData &&
              tableData.map((row) => (
                <TableRow

                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left" component="th" scope="row">
                    {row.name}

                    {/*PROFILE IMAGE BUTTON COMPONENT */}
                    <Proimgbutton fechData={fechData} id={row._id} />


                  </TableCell>
                  <TableCell align="center" >
                    {row._id}
                  </TableCell>
                  <TableCell align="left" component="th" scope="row">
                    <img key={row._id} width={60} src={row?.profilImg} alt="" srcset="" />
                    <Box>
                      <EditIcon onClick={() => { setOpen(true), setEditData({ id: row._id, imgName: row.profilImg }), setdeletedData('') }} color="success" />
                      <DeleteIcon onClick={() => { setOpen(true), setdeletedData({ id: row._id, imgName: row.profilImg }), setEditData('') }} color="error" />
                    </Box>
                  </TableCell>
                  <TableCell>
                    {/* EXTRA IMAGE UPLODE COMPONENT */}
                    <ExtraUplode fechData={fechData} id={row._id} />
                  </TableCell>
                  {/* IMAGE COUNT */}
                  <TableCell>
                    {row?.extraImages.length}
                  </TableCell>
                </TableRow>
              ))}
            {/* <TablePagination/> */}
          </TableBody>
        </Table>

        {/* alert messeage box  */}
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"are you sure ?"}
          </DialogTitle>

          <DialogActions>
            <Button onClick={() => setOpen(false)}>Disagree</Button>
            <Button onClick={handleAction} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </TableContainer>

    </div>
  );
};

export default ImgUplode;
