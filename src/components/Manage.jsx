import React from "react";
import Navigationbar from "./Navigationbar";
import Navigationmenu from "./Navigationmenu";
import { Box } from "@mui/material";
import DataTable from "react-data-table-component";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const sortIcon = <ArrowDownwardIcon />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };


const Manage = () => {
  const data = useSelector((state) => {return state.Booking.Booking.data})
  console.log('data',data);
  const columns = [
    {
      name: "Name",
      selector: (row) => row.FullName ,
      onclick: () => navigate("/userorder"),
    },
    {
      name: "Email",
      selector: (row) => row.Email,
    },

    {
      name: "Phone Number",
      selector: (row) => row.Phone,
    },
    {
      name: "Destination",
      selector: (row) => row.destination,
    },
    {
      name: "Destination ID",
      selector: (row) => row.destination_id,
    },
    {
      name: "Check in Date",
      selector: (row) => row.startDate,
    },
    {
      name: "Check out Date",
      selector: (row) => row.endDate,
    },
    {
      name: "Payment",
      selector: (row) => row.payment,
    },
  ];
  console.log(selectProps);
  // const data = [
  //   {
  //     id: 1,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Completed'
  //   },
  //   {
  //     id: 2,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Processing',
  //   },
  //   {
  //     id: 3,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: "On Hold"
  //   },
  //   {
  //     id: 4,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: "Pending"
  //   },
  //   {
  //     id: 5,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Processing',
  //   },
  //   {
  //     id: 6,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Processing',
  //   },

  //   {
  //     id: 7,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Processing',
  //   },
  //   {
  //     id: 8,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Processing',
  //   },

  //   {
  //     id: 9,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Processing',
  //   },
  //   {
  //     id: 10,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Processing',
  //   },

  //   {
  //     id: 11,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Completed'
  //   },
  //   {
  //     id: 12,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Completed'
  //   },
  //   {
  //     id: 13,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Completed'
  //   },
  //   {
  //     id: 14,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Completed'
  //   },

  //   {
  //     id: 15,
  //     title: "Beetlejuice",
  //     email: "mumbiew@gmail.com",
  //     phonenumber: "9945256852",
  //     destination: "bangalore",
  //     destination_id: "63sd65sd6363sadf65",
  //     checkin: new Date().toLocaleDateString(),
  //     checkout: new Date().toLocaleDateString(),
  //     payment: "5222",
  //     paymentstatus: 'Completed'
  //   },
  // ];
  const navigate = useNavigate();

  return (
    <>
      {/* BASIC TEMPLATE */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navigationbar />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: " -webkit-fill-available",
          }}
        >
          <Navigationmenu />
          <div style={{ width: 1060, height: 500 }}>
            <Box sx={{ margin: 2 }}>
              <Paper elevation={2}>
                <DataTable
                  columns={columns}
                  data={data}
                  pagination
                  selectableRowsComponent={Checkbox}
                  selectableRowsComponentProps={selectProps}
                  sortIcon={sortIcon}
                  dense
                  fixedHeader={true}
                  fixedHeaderScrollHeight={"300px"}
                  highlightOnHover={true}
                  pointerOnHover={true}
                  progressPending={false}
                  striped
                  selectableRows
                  selectableRowsHighlight
                  responsive
                  onclick={infoHandler}
                />
              </Paper>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manage;

const infoHandler = () => {
  console.log("infoHandler called");
};


