import { useMemo } from 'react';

export const usePagination = <T>(data: T[], currentPage: number, itemsPerPage: number) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const paginatedData = useMemo(
    () => data.slice(startIndex, endIndex),
    [data, startIndex, endIndex],
  );

  return paginatedData;
};
