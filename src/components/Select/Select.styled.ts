import styled from '@emotion/styled';
import { FormControl, Select, MenuItem, Box } from '@mui/material';
import { StyledSelectProps } from './Select.types';

export const StyledFormControl = styled(FormControl)<StyledSelectProps>(({ theme }) => ({
  width: '100%',
 [theme.breakpoints.down('lg')]: {

  },
  [theme.breakpoints.down('md')]: {

  },
[theme.breakpoints.down('sm')]: {
    minWidth: '160px',

  },

}));

export const StyledSelect = styled(Select)<StyledSelectProps>(({ theme, open }) => ({

  '& .MuiSelect-select.MuiInputBase-input': {
    minHeight: 'auto',
    paddingRight: '0px !important',
    padding: '0 15px',
    '&:focus ': {
      background: theme.palette.primary.main,
    },
    '& p': {

    },
  },
  '& p': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '80%',
  },
  '& svg': {
    position: 'absolute',
    fill: theme.palette.info.main,
    right: '0',
    marginRight: '15px',
    marginLeft: '10px',
    pointerEvents: 'none',
    '& path': {
      fill: theme.palette.info.main,
    },
  },
}));

export const StyledMenuItem = styled(MenuItem)<StyledSelectProps>(({ theme }) => ({
  height: '40px',
  padding: '0 30px',
  fontSize: theme.typography.body2.fontSize,
  fontFamily: theme.typography.body2.fontFamily,
  fontWeight: theme.typography.body2.fontWeight,
  lineHeight: theme.typography.body2.lineHeight,
  '&:focus, :hover': {
    background: theme.palette.primary.dark,
    color: theme.palette.primary.main,
        },
  '&.Mui-selected:hover, &.Mui-selected.Mui-focusVisible': {
      background: theme.palette.primary.dark,
    },
}));

export const StyledIconWrapper = styled(Box)<StyledSelectProps>(({ theme }) => ({
}));
