import React, { useEffect, memo, useCallback } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { FiltersForm } from './components';
import { fetchSectors, setCurrentPage } from './slices';
import { useAppDispatch, useAppSelector, usePagination } from '../../shared';
import { Loader, Pagination, Table } from '../../components';
import { COLUMN_NAMES } from './TableStock.constants';
import { StocksEntity } from '../../domains';

export const TableStock = memo(() => {
  const dispatch = useAppDispatch();
  const { loading, stocks, totalCount, currentPage, error } = useAppSelector(
    (state) => state.tableStock,
  );
  const paginatedStocks = usePagination<StocksEntity>(stocks, currentPage, 10);

  useEffect(() => {
    dispatch(fetchSectors());
  }, []);

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  }, []);

  return (
    <Box width="100%" paddingTop="35px" paddingBottom="100px">
      <FiltersForm />
      {error ? (
        <Typography mt="40px" textAlign="center" variant="h6" color="error">
          {error}
        </Typography>
      ) : !loading ? (
        <Box mt="40px">
          <Table columnName={Object.values(COLUMN_NAMES)} data={paginatedStocks} />
          <Pagination
            page={currentPage}
            onChange={handlePageChange}
            count={Math.ceil(totalCount / 10)}
          />
        </Box>
      ) : (
        <Loader />
      )}
    </Box>
  );
});
