import { Typography } from '@mui/material';
import React, { memo } from 'react';
import { Box } from '@mui/system';
import { InputBase } from '../InputBase';
import {
  StyledFormControl,
  StyledIconWrapper,
  StyledMenuItem,
  StyledSelect,
} from './Select.styled';
import { ExitIcon } from '../../ui/icons';
import { SelectProps } from './Select.types';

export const Select = memo(
  ({
    value,
    onChange,
    data,
    name,
    onClear,
    onInputChange,
    defaultValue,
    ...props
  }: SelectProps) => {
    const handleClearSelect = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      if (onClear) {
        onClear();
      }
    };

    return (
      <StyledFormControl variant="standard">
        <StyledSelect
          {...props}
          value={value}
          onChange={onChange}
          inputProps={{ 'aria-label': name }}
          input={<InputBase />}
          displayEmpty
          renderValue={(selected) => {
            if (Array.isArray(selected)) {
              return name;
            }
            if (typeof selected === 'string' && selected) {
              const selectedElem = data?.find((elem) => elem.id === selected);
              return (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    '&& svg': {
                      position: 'static',
                      marginRight: '35px',
                      transform: 'none',
                      pointerEvents: 'auto',
                    },
                  }}
                >
                  <Typography>{selectedElem?.name}</Typography>
                  <StyledIconWrapper onMouseDown={handleClearSelect}>
                    <ExitIcon />
                  </StyledIconWrapper>
                </Box>
              );
            }
              return <Typography>{name}</Typography>;
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: 'primary.main',
                border: '1px solid',
                borderColor: 'primary.dark',
                borderBottomLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                maxHeight: '350px',
                borderTopColor: 'text.disabled',
                width: '0px',
                overflowX: 'auto',
                '& ul': {
                  width: '100%',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                },
              },
            },
          }}
        >
          {data?.map((elem) => (
            <StyledMenuItem key={elem.id} value={elem.id}>
              {elem.name}
            </StyledMenuItem>
          ))}
        </StyledSelect>
      </StyledFormControl>
    );
  },
);
