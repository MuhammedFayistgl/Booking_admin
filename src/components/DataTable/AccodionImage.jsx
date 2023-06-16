import React from "react";
import { Stack } from "rsuite";

const AccodionImage = ({profilImg}) => {
  return (
    <>
      <Stack sx={{ width: "15%", fontSize: 15, flexShrink: 0 }}>
        <img style={{ width: 40, height: 40 }} width={"50%"} src={profilImg} alt="img" />
      </Stack>
    </>
  );
};

export default AccodionImage;
