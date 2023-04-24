import { LoadingButton } from '@mui/lab'
import { Alert, Box, Button } from '@mui/material'
import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Profileimagebutton = ({fechData,id}) => {

    const [file, setFile] = useState([]);
    const [loding, setloding] = useState(false);
//  console.log('file',file);
    function handleSubmit(event, id) {
if(file.length > 0){
  
    setloding(true)
    event.preventDefault();
    const url = "http://localhost:5000/admin/imageupload";

    const formData = new FormData();

    formData.append("file", file[0].img);
    formData.append("fileID", file[0].id);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      if(response.status === 200) {
        console.log('databace responce',response);
        toast.success(response.data.message)
        fechData()
        setFile([])
        setloding(false)
      }
 
    });
}else{
    toast.error('please select your Profile image ')
}
     
    
      }

  return (
    <>
     <Box sx={{display:'flex',flexDirection:'row',gap:3}}>
     
      <Button
                      variant="contained"
                      aria-label="upload picture"
                      component="label"
                      endIcon={ <AddPhotoAlternateTwoToneIcon  />}
                      {...file?.length > 0 &&   {color:"warning"}  }
                      > 
                    Select  {' '}
                     {file?.length > 0  && file?.length }
                     
                      <input
                     onChange={e => setFile([{...file,id:id,img:e.target.files[0]}])}
                         hidden
                        accept="image/*"
                        multiple
                        type="file"
                        name="file" />
                    </Button> 
                    <LoadingButton
                        onClick={(e)=> handleSubmit(e,id)}
                        type="submit"
                        size="small"
                        loading={loding}
                        loadingIndicator="Loading…"
                        variant="outlined"
                        endIcon={<CloudUploadIcon />}
                        {...file?.length > 0 &&   {color:"success"}  }
                      >
                        <span>UPLODE</span>
                      </LoadingButton> 
                      </Box>
    </>
  )
}

export default Profileimagebutton
