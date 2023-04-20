import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { datasAsync } from "../redux/mainAsset";
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
    const url = "http://localhost:5000/admin/extraimageupload";

    const formData = new FormData();

    for (let i = 0; i < imagefile.length; i++) {
      formData.append("filse", imagefile[i]);
    }
 

    formData.append("fileID", id);

    console.log(formData.getAll("fileID"));

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios.post(url, formData, config).then((response) => {
      if (response.status === 200) {
        toast.success(response.statusText);
        setimageFille([])
        fechData()
      }
    });
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
          Select {imagefile?.length}  
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

    // <>
    //   <Box
    //     style={{
    //       marginTop: 15,
    //       display: "flex",
    //       justifyContent: "space-between",
    //       gap: 15,
    //     }}
    //   >
    //     <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
    //       {/* INPUT BUTTON */}
    //       <Autocomplete
    //         disablePortal
    //         id="combo-box-demo"
    //         onChange={(e) => {
    //           setInputValue(e.target.innerText);
    //         }}
    //         options={
    //           datavalue &&
    //           datavalue.map((d) => {
    //             return d.category;
    //           })
    //         }
    //         sx={{ width: 300 }}
    //         renderInput={(params) => <TextField {...params} label="Category" />}
    //       />
    //       {/*  THUMBNILE IMAGE  */}
    //       <Box sx={{ maxWidth: "100%" }}>
    //         <div style={{ display: "flex", justifyContent: "space-between" }}>
    //           {imageUrl.map((i, index) => {
    //             return <img key={index} width={50} src={i} alt="IMG" />;
    //           })}
    //         </div>
    //       </Box>

    //       {/* FILE SELECT BUTTON */}
    //       <Button
    //         variant="outlined"
    //         component="label"
    //         onChange={(e) => imagepreview(e)}
    //       >
    //         BROWSE
    //         <input hidden accept="image/*" multiple type="file" />
    //       </Button>
    //       {/* UPLODING BUTTON */}
    //       <LoadingButton
    //         size="small"
    //         loading={true}
    //         loadingIndicator="Loading…"
    //         variant="outlined"
    //         onSubmit={ ()=> submitHandler() }
    //       >
    //         <span>Fetch data</span>
    //       </LoadingButton>
    //     </div>
    //     {/* IMAGE GALLARY */}
    //     <ImageList sx={{ width: 600, height: 450 }} cols={3} rowHeight={164}>
    //       {!datavalue ? (
    //         <Skeleton sx={{ width: 500, height: 450 }} />
    //       ) : (
    //         datavalue.map((item) => (
    //           <ImageListItem key={item._id}>
    //             <img
    //               src={`http://localhost:5000/${item.profilImg}`}
    //               srcSet={`${item.profilImg}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    //               alt={item.name}
    //               loading="lazy"
    //             />
    //           </ImageListItem>
    //         ))
    //       )}
    //     </ImageList>
    //   </Box>
    // </>
  );
};
//image data
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

// input DATA
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
export default ExtraUplode;
