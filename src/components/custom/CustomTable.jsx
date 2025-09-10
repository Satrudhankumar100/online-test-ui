import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  
  {
    id: 'density',
    label: 'Description',
    minWidth: 170,
    format: (value) => value.toFixed(2),
  },
  { id: 'code', label: 'No of Test Series', minWidth: 100, align:'center' },
  {
    id: 'population',
    label: 'Price',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Subsribtion Expire',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'visiblity',
    label: 'visiblity',
    minWidth: 100,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(name, code, population, size,visiblity) {
  const density = population / size;
  return { name, code, population, size, density,visiblity };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263,'public'),
  createData('China', 'CN', 1403500365, 9596961,'public'),
  createData('Italy', 'IT', 60483973, 301340,'private'),
  createData('United States', 'US', 327167434, 9833520,'public'),
  createData('Canada', 'CA', 37602103, 9984670,'public'),
  createData('Australia', 'AU', 25475400, 7692024,'public'),
  createData('Germany', 'DE', 83019200, 357578,'private'),
  createData('Ireland', 'IE', 4857000, 70273,'public'),
  createData('Mexico', 'MX', 126577691, 1972550,'private'),
  createData('Japan', 'JP', 126317000, 377973,'public'),
  createData('France', 'FR', 67022000, 640679,'public'),
  createData('United Kingdom', 'GB', 67545757, 242495,'public'),
  createData('Russia', 'RU', 146793744, 17098246,'private'),
  createData('Nigeria', 'NG', 200962417, 923768,'public'),
  createData('Brazil', 'BR', 210147125, 8515767,'public'),
];

export default function CustomTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,fontWeight:'bolder' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                        <div className='flex gap-2 justify-end'>
                            
                         <button className='px-3 py-2 bg-blue-300 rounded-md cursor-pointer'>Edit</button>
                         <button className='px-3 py-2 bg-green-300 rounded-md cursor-pointer'>Show Test Series</button>
                         <button className='px-3 py-2 bg-red-300 rounded-md cursor-pointer'>Deative</button>
                        </div>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
