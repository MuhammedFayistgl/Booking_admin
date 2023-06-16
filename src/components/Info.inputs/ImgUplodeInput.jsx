import React from "react";
import { Avatar, Button, Stack } from "rsuite";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const ImgUplodeInput = () => {
  const [imagePreview, setimagePreview] = React.useState([]);
  function imagehandleChange(event) {
    setimagePreview([{ ...imagePreview, preview: URL.createObjectURL(event.target.files[0]) }]);
  }

  return (
    <>
      <Stack>
        <Avatar
          alt="Semy Sharp"
          src={imagePreview[0]?.preview && imagePreview[0]?.preview}
          sx={{ width: 50, height: 50, objectFit: "cover" }}
        />
      </Stack>

      <Button
        {...(imagePreview?.length > 0 && { color: "warning" })}
        onChange={(e) => {
          imagehandleChange(e);
        }}
        size="small"
        aria-label="upload picture"
        component="label"
        variant="contained"
        endIcon={<AddPhotoAlternateIcon />}
      >
        {...imagePreview?.length > 0 ? "Ready to uplode" : "Select profile picture"}

        <input hidden accept="image/*" multiple type="file" name="file" />
      </Button>
    </>
  );
};

export default ImgUplodeInput;
