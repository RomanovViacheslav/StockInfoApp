import styled from '@emotion/styled';
import { TableBody, TableHead } from '@mui/material';
import { StyledSelectProps } from '../Select/Select.types';

export const StyledTableHead = styled(TableHead)<StyledSelectProps>(({ theme }) => ({
  background: theme.palette.secondary.dark,
  height: '85px',
  '& .MuiTableCell-root': {
    fontSize: theme.typography.h6.fontSize,
    fontFamily: theme.typography.h6.fontFamily,
    fontWeight: theme.typography.h6.fontWeight,
    lineHeight: theme.typography.h6.lineHeight,
  },

}));

export const StyledTableBody = styled(TableBody)<StyledSelectProps>(({ theme }) => ({
    background: theme.palette.primary.main,
    '& td': {
        height: '75px',
    },
    '& td:first-of-type': {

        fontSize: theme.typography.caption.fontSize,
        fontFamily: theme.typography.caption.fontFamily,
        fontWeight: theme.typography.caption.fontWeight,
        lineHeight: theme.typography.caption.lineHeight,
      },
  }));
