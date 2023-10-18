import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const CustomComponent = () => (
  <div style={{display:'flex',alignItems:'flex-start',gap:'2em'}}>
  <img src='https://th.bing.com/th/id/R.8babfb63dbcbf24329c0b52bb3bd5b71?rik=n%2b4z5Z2ysESh1Q&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fLWEuptq.jpg&ehk=vQOlOb839bpwbERTv6GoobLx0qDjObdoyrH3%2fAhCNpE%3d&risl=&pid=ImgRaw&r=0' alt='Custom' width='150px' height='75px' style={{borderRadius:'8px'}}/>
   <div style={{display:'flex',alignItems:'flex-start',gap:'0.5em',flexDirection:'column'}}>
     <h3>Description of the video goes here...</h3>
    <span style={{color:'#999999'}}>Video Length: Long</span>
   </div>
  </div>
);

const rows = [
 
  createData(<CustomComponent />, '32in stock','$ 45.99', 20),
  createData(<CustomComponent />, '32in stock','$ 45.99', 20),
  createData(<CustomComponent />, '32in stock','$ 45.99', 20),
  createData(<CustomComponent />, '32in stock','$ 45.99', 20),
  createData(<CustomComponent />, '32in stock','$ 45.99', 20),
];

export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="custom table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Sale</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"  sx={{width:'40vw'}} >
                {row.name}
              </TableCell>
              <TableCell sx={{textAlign:'end'}}>{row.calories}</TableCell>
              <TableCell sx={{textAlign:'end'}}>{row.fat}</TableCell>
              <TableCell sx={{textAlign:'center'}}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
