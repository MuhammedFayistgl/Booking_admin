import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ExtimagList() {
 const data = useSelector((data)=>  data.data.value)
 const dispath = useDispatch();


 useEffect(() => {
    dispath( datasAsync()) 
    !data &&  
   dispath(datasAsync());
 }, []);

 console.log(data)
  return (
    <TableContainer  sx={{ borderCollapse: 'separate', tableLayout: 'fixed',maxHeight:500 ,maxWidth:1000,overflow:'scroll' }} component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">EXTRA IMAGES</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row._id}</TableCell>

         <TableCell   align="right"> 

          {row.extraImages?.map((image, i) =>   <img style={{marginLeft:5}} width={70} height={50} src={image} alt="img" key={i} />)} 
          
          </TableCell>
            
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


