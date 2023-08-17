import { Pagination } from '@mui/material';
import styled from '@emotion/styled';
import { StyledPaginationProps } from './Pagination.types';

export const StyledPagination = styled(Pagination)<StyledPaginationProps>(({ theme }) => ({
  '& .MuiButtonBase-root': {
    margin: '0px',
    borderRadius: '0px',
    width: '40px',
    height: '40px',
    borderColor: theme.palette.primary.dark,
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.caption.fontFamily,
    fontWeight: theme.typography.caption.fontWeight,
    lineHeight: theme.typography.caption.lineHeight,
    '& svg': {
        '& path': {
          fill: theme.palette.primary.dark,
        },
    },
    '&:hover': {
        background: theme.palette.primary.light,
    },

  },
    '& .MuiPaginationItem-root.Mui-selected': {
        background: theme.palette.primary.dark,
        '&:hover': {
            background: theme.palette.primary.dark,
        },
    },
    '& .MuiPagination-ul': {
        '& > li:first-of-type .MuiPaginationItem-root': {
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
        },
        '& > li:last-child .MuiPaginationItem-root': {
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
        },
      },
      '& .MuiPaginationItem-root.Mui-disabled': {
        borderColor: theme.palette.info.main,
    },
}));
