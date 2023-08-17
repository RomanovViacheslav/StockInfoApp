import React, { memo, useEffect, useState } from 'react';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledCard } from './Card.styled';
import { CardProps } from './Card.types';
import { APP_BACKEND_URL } from '../../shared';
import { Loader } from '../Loader';

export const Card = memo(({ image, name, location, author, created, ...props }: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = APP_BACKEND_URL + image;
    img.onload = () => setImageLoaded(true);
  }, [image]);

  return (
    <StyledCard>
      {imageLoaded ? (
        <CardMedia height="100%" component="img" image={APP_BACKEND_URL + image} alt={name} loading="lazy" />
      ) : (
        <Loader />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" color="info.contrastText" component="h6">
          {name}
        </Typography>
        <Box display="flex" gap="8px">
          <Typography variant="subtitle1" color="info.contrastText" component="span">
            Author:
          </Typography>
          <Typography variant="subtitle2" color="info.contrastText" component="span">
            {author}
          </Typography>
        </Box>
        <Box display="flex" gap="8px">
          <Typography variant="subtitle1" color="info.contrastText" component="span">
            Created:
          </Typography>
          <Typography variant="subtitle2" color="info.contrastText" component="span">
            {created}
          </Typography>
        </Box>
        <Box display="flex" gap="8px">
          <Typography variant="subtitle1" color="info.contrastText" component="span">
            Location:
          </Typography>
          <Typography variant="subtitle2" color="info.contrastText" component="span">
            {location}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  );
});
