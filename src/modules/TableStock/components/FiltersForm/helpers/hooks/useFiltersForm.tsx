import React, { useCallback, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../../../shared';
import { fetchStockDataBySymbol, fetchStocksBySector } from '../../../../slices';

export const useFormFilters = () => {
  const dispatch = useAppDispatch();
  const { symbols, filtersLoading, sectors } = useAppSelector((state) => state.tableStock);

  const [nameInput, setNameInput] = useState('');
  const [sectorsSelect, setSectorsSelect] = useState('');

  const handleSelectChange = useCallback(
    () => (event: SelectChangeEvent<any>) => {
      setSectorsSelect(event.target.value);
      dispatch(fetchStocksBySector(event.target.value));
    },
    [dispatch],
  );

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  }, []);

  const handleClearSelect = useCallback(() => {
    setSectorsSelect('');
  }, []);

  const handleInputAction = () => {
    dispatch(fetchStockDataBySymbol(nameInput));
  };

  return {
    nameInput,
    sectorsSelect,
    sectors,
    symbols,
    filtersLoading,
    handleSelectChange,
    handleInputChange,
    handleClearSelect,
    handleInputAction,
  };
};
