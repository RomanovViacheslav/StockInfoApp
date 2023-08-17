import React, { memo } from 'react';
import { PaginationItem } from '@mui/material';
import { StyledPagination } from './Pagination.styled';
import {
  ArrowBackPaginationIcon,
  ArrowForwardPaginationIcon,
  DoubleArrowBackIcon,
  DoubleArrowForwardIcon,
} from '../../ui/icons';
import { PaginationProps } from './Pagination.types';

export const Pagination = memo(({ ...props }: PaginationProps) => (
  <StyledPagination
    {...props}
    color="primary"
    variant="outlined"
    shape="rounded"
    showFirstButton
    showLastButton
    renderItem={(item) => (
      <PaginationItem
        slots={{
          first: DoubleArrowBackIcon,
          last: DoubleArrowForwardIcon,
          previous: ArrowBackPaginationIcon,
          next: ArrowForwardPaginationIcon,
        }}
        {...item}
      />
    )}
  />
));
