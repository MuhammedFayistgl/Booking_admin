import React from "react";
import Navigationbar from "./Navigationbar";
import Navigationmenu from "./Navigationmenu";
import { Box, TablePagination } from "@mui/material";
import DataTable from "react-data-table-component";
import Expandcomp from "./Expandcomp";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useNavigate } from "react-router-dom";
// Mui table =====
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// =======rsuite ========
import {  Tag } from 'rsuite';


const sortIcon = <ArrowDownwardIcon />;
const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };


const Manage = () => {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.title,
      onclick: () => navigate("/userorder"),
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },

    {
      name: "Phone Number",
      selector: (row) => row.phonenumber,
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
      selector: (row) => row.checkin,
    },
    {
      name: "Check out Date",
      selector: (row) => row.checkout,
    },
    {
      name: "Payment",
      selector: (row) => row.payment,
    },
  ];
  console.log(selectProps);
  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 2,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 3,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 4,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 5,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 6,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },

    {
      id: 7,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 8,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },

    {
      id: 9,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 10,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },

    {
      id: 11,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 12,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 13,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
    {
      id: 14,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },

    {
      id: 15,
      title: "Beetlejuice",
      email: "mumbiew@gmail.com",
      phonenumber: "9945256852",
      destination: "bangalore",
      destination_id: "63sd65sd6363sadf65",
      checkin: new Date().toLocaleDateString(),
      checkout: new Date().toLocaleDateString(),
      payment: "5222",
    },
  ];
  const navigate = useNavigate();
  const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5);
const handleChangePage = (event, newPage) => {
  setPage(newPage);
};
const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
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
              {/* <Paper elevation={2}>
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
              </Paper> */}
              <TableContainer
                component={Paper}
                
                sx={{
                  borderCollapse: "separate",
                  tableLayout: "fixed",
                  maxHeight: 500,
                  maxWidth: 1000,
                  overflow: "scroll",
                  
                }}
              >
                <Table aria-label="caption table">
                  <caption>A basic table example with a caption</caption>
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.phonenumber}</TableCell>
                        <TableCell align="right">{row.destination}</TableCell>
                        <TableCell align="right">{row.checkin}</TableCell>
                        <TableCell align="right">{row.checkout}</TableCell>
                        <TableCell align="right">{row.payment}  </TableCell>
                        <TableCell align="right">
                        
                          <Tag color="green">Orange</Tag> 
                       
                            </TableCell>
                       
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
        
              </TableContainer>
              <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={data?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
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

const style = {};
