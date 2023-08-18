import { TableContainer, Table as TableMui, TableRow, TableCell, Paper } from '@mui/material';
import React, { memo } from 'react';
import { TableProps } from './Table.types';
import { StyledTableBody, StyledTableHead } from './Table.styled';

export const Table = memo(({ columnName, data }: TableProps) => (
  <TableContainer component={Paper}>
    <TableMui sx={{ minWidth: 650 }} size="small" aria-label="a table">
      <StyledTableHead>
        <TableRow>
          <TableCell>#</TableCell>
          {columnName.map((name) => (
            <TableCell align="left" key={name}>
              {name}
            </TableCell>
          ))}
        </TableRow>
      </StyledTableHead>
      <StyledTableBody>
        {data.map((row) => (
          <TableRow key={row.symbol} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {Object.entries(row).map((columnName) => (
              <TableCell key={columnName[0]} align="left">
                {columnName[1]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </StyledTableBody>
    </TableMui>
  </TableContainer>
));
