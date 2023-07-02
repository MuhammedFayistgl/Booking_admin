import { ListItem, ListItemText, Paper } from "@mui/material";
import React, { useEffect } from "react";
import RecentAvathar from "./RecentAvathar";
import RecentDate from "./RecentDate";
import RecentTag from "./RecentTag";
import RecentName from "./RecentName";
import RecentTitle from "./RecentTitle";
import { useDispatch, useSelector } from "react-redux";
import { userBookingGetadmin } from "../../redux/ExtraRduces/ThankHelpers";
import RecentTime from "./RecentTime";

const TransationsComponent = () => {

  const state = useSelector((state) => {
    return state.Booking.Booking?.data;
  });

  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(userBookingGetadmin());
  }, []);

  return (
    <>
      <RecentTitle />
      {state &&
        state.map((state) => {
          return (
          
              <ListItem sx={{ display: "flex", flexDirection: "row", gap: 2,backgroundColor:'cornsilk',mt:0.1 }}>
                <ListItemText sx={{ display: "flex", flexDirection: "column" }}>
                  <RecentAvathar userID={state.userID} name={state.FullName} />
                  <RecentName name={state.FullName} />
                </ListItemText>
                <RecentDate name={state.FullName} date={state.startDate} />
                <RecentTime name={state.FullName} time={state.Time} />
                <RecentTag />
              </ListItem>
            
          );
        })}
    </>
  );
};

export default TransationsComponent;
