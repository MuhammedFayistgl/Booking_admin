import React from "react";
import { Stack } from "rsuite";
import Swal from 'sweetalert2'


const AccodionImage = ({ profilImg }) => {
  return (
    <>
      <Stack onClick={() => {   {Swal.fire({
          // title: "Sweet!",
          // text: "Modal with a custom image.",
          imageUrl:profilImg
          //  "https://unsplash.it/400/200"
           ,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        })}}} sx={{ width: "15%", fontSize: 15, flexShrink: 0 }}>
     
        <img  style={{ width: 40, height: 40 }} width={"50%"} src={profilImg} alt="img" />
      </Stack>
    </>
  );
};

export default AccodionImage;
