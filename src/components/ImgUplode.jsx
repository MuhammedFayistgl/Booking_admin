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
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { LoadingButton } from "@mui/lab";
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import toast, { Toaster } from "react-hot-toast";
import { DeleteimageHandler, EditimageHandler } from "../Helper/CredOparations";
import ExtraUplode from "./ExtraUplode";
import { useSelector } from "react-redux";






const ImgUplode = () => {
  const [file, setFile] = useState();
  const [tableData, setTableData] = useState();
  const [open, setOpen] = React.useState(false);
  const [deletedData, setdeletedData] = React.useState({});
  const [editData, setEditData] = React.useState({});
  const [erorr, setErorr] = React.useState('');
  const data = useSelector((data)=>  data.data.value)
console.log('data',data);
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
 
  function handleChange(id,event) {
    setFile({...file,id:id,img:event.target.files[0]});
  }

  function handleSubmit(event, id) {
    event.preventDefault();
    const url = "http://localhost:5000/admin/imageupload";

    const formData = new FormData();

    formData.append("file", file.img);
    formData.append("fileID", file.id);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      if(response.status === 200) {
        
        toast.success(response.statusText)
        fechData()
      }
 
    });

  }
  const handleAction = () => {
    setOpen(false);
  
    if(editData){
      console.log('you clicked the edit button');
      setErorr(EditimageHandler(editData)) 
    }else{
      console.log('you clicked the delete button');
      setErorr(DeleteimageHandler(deletedData)) 
    }
    
     
  };

  return (
    <div>
     <Toaster/> 
      {/* Teble */}
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 ,maxHeight:100,overflow:'scroll' }} aria-label="simple table">
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
                    <Box sx={{display:'flex',flexDirection:'row',gap:3}}>
                     
                      <Button
                      variant="contained"
                      aria-label="upload picture"
                      component="label"
                      endIcon={ <AddPhotoAlternateTwoToneIcon  />}
                    > Select
                     
                      <input
                     onChange={e => handleChange(row._id,e)}
                         hidden
                        accept="image/*"
                        multiple
                        type="file"
                        name="file" />
                    </Button> 
                    <LoadingButton
                        onClick={(e)=> handleSubmit(e,row._id)}
                        type="submit"
                        size="small"
                        loading={false}
                        loadingIndicator="Loading…"
                        variant="outlined"
                        endIcon={<CloudUploadIcon />}
                      >
                        <span>UPLODE</span>
                      </LoadingButton>
                    </Box>
                  </TableCell>
                  <TableCell align="center" >
                    {row._id}
                  </TableCell>
                  <TableCell align="left" component="th" scope="row">
                    <img  key={row._id} width={60} src={`http://localhost:5000/${row.profilImg}`}  alt="" srcset="" />
                    <Box>
                          <EditIcon  onClick={()=>  {setOpen(true),setEditData({ id : row._id ,imgName :row.profilImg  }),setdeletedData('') } } color="success" /> 
                          <DeleteIcon  onClick={()=>  {setOpen(true) ,setdeletedData( { id : row._id ,imgName :row.profilImg  }),setEditData('') } } color="error"/>
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
          </TableBody>
        </Table>
        {/* alert messeage box  */}
        <Dialog
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"are you sure ?"}
        </DialogTitle>
     
        <DialogActions>
          <Button onClick={()=> setOpen(false)}>Disagree</Button>
          <Button onClick={handleAction} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </TableContainer>
      {/* <Button
       
        onSubmit={handleSubmit}
        aria-label="upload picture"
        component="label"
        variant="contained"
        endIcon={<AddPhotoAlternateIcon />}
        size="small"
      >
        Cover image
        <input
          onChange={handleChange}
          hidden
          accept="image/*"
          multiple
          type="file"
          name="file"
        />
      </Button> */}{" "}
      {/* <div>
        //{" "}
        <div className="App">
          //{" "}
          <form onSubmit={handleSubmit}>
            // <h1>React File Upload</h1>
            // <input type="file" />
            // <button type="submit">Upload</button>
            //{" "}
          </form>
          //{" "}
        </div>
        //{" "}
      </div> */}
    </div>
  );
};

export default ImgUplode;
