import React, { memo } from 'react';
import { Box } from '@mui/material';
import { Select, TextFieldComponent } from '../../../../components';
import { useFormFilters } from './helpers';

export const FiltersForm = () => {
  const {
    nameInput,
    sectorsSelect,
    sectors,
    filtersLoading,
    handleSelectChange,
    handleInputChange,
    handleClearSelect,
    handleInputAction,
  } = useFormFilters();

  return (
    <Box
      component="form"
      display="flex"
      justifyContent="space-between"
      gap="20px"
      width="100%"
      sx={(theme) => ({
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      })}
    >
      <TextFieldComponent
        type="text"
        name="symbol"
        placeholder="Symbol"
        value={nameInput}
        onChange={handleInputChange}
        onIconClick={handleInputAction}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            handleInputAction();
          }
        }}
      />
      <Select
        name="Sectors"
        value={sectorsSelect}
        onChange={handleSelectChange()}
        data={sectors}
        disabled={filtersLoading}
        onClear={() => handleClearSelect()}
      />
    </Box>
  );
};
