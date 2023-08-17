import { IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { StyledIconButtonProps } from './Header.types';

export const StyledIconButton = styled(IconButton)<StyledIconButtonProps>(({ theme }) => ({
    '& svg': {
        '& path': {
          fill: theme.palette.primary.dark,
        },
    },
}));
