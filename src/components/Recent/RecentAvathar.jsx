import React from "react";
import { Avatar, Badge } from "rsuite";
import Swal from "sweetalert2";

const RecentAvathar = ({userID,name}) => {
  return (
    <Badge>
      <Avatar
        onClick={() => {
          {
            Swal.fire({
              title: `Name : ${name}`,
              text: `userID: ${userID}`,
              imageUrl: "https://avatars.githubusercontent.com/u/12592949", // "https://unsplash.it/400/200",
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: "Custom image",
            });
          }
        }}
        src="https://avatars.githubusercontent.com/u/12592949"
        alt="@superman66"
      />
    </Badge>
  );
};

export default RecentAvathar;
