import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, TableCell } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Skeleton from "@mui/material/Skeleton";
import Button from "@mui/material/Button";
import { LoadingButton } from "@mui/lab";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import AddPhotoAlternateTwoToneIcon from "@mui/icons-material/AddPhotoAlternateTwoTone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { toast } from "react-hot-toast";
import axios from "axios";
import _ from "lodash";

const ExtraUplode = ({ id ,fechData}) => {



  const [imagefile, setimageFille] = useState([]);
 
  const imagepreview = (e)=> {
    setimageFille(e.target.files)
  }
 console.log('imagefile',imagefile);

  const submitHandler = async (event) => {
    event.preventDefault();
    if(imagefile.length > 0){
 
      const url = "http://localhost:5000/admin/extraimageupload";

      const formData = new FormData();
  
      for (let i = 0; i < imagefile.length; i++) {
        formData.append("filse", imagefile[i]);
      }
   
  
      formData.append("fileID", id);
  
      console.log(formData.getAll("filse"));
  
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
  
      axios.post(url, formData, config).then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message);
          
          setimageFille([])
          fechData()
        }
      });
}else{
  toast.error('Please select file to upload')
}
  
  };

  return (
    <>
      <Box sx={{ display: "flex", gap: 3 }}>
    
        <Button
          variant="contained"
          aria-label="upload picture"
          component="label"
          {...imagefile.length > 0 &&   {color:"warning"}  }
         
          endIcon={<AddPhotoAlternateTwoToneIcon />}
        >
          {" "}
          Select {""}   {imagefile?.length > 0  && imagefile?.length }
          <input
          
            onChange={(e) => imagepreview(e)}
            hidden
            accept="image/*"
            multiple
            type="file"
            name="filse"
          />
        </Button>
        <LoadingButton
          onClick={(e) => submitHandler(e)}
          type="submit"
          size="small"
          loading={false}
          loadingIndicator="Loading…"
          variant="outlined"
          endIcon={<CloudUploadIcon />}
          {...imagefile.length > 0 &&   {color:"success"}  }
        >
          <span>UPLODE {imagefile?.length} </span>
        </LoadingButton>

      </Box>
      
    </>

  );
};

export default ExtraUplode;
