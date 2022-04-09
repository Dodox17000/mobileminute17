/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Nike = () => {

  return (
    <Box>
      <Typography
        variant="h2"
        align={'center'}
        color={'#FFFFF'}
        sx={{
          fontWeight: 900,
          textTransform: 'uppercase',
        }}
      >
        Nos Appareils
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color={'#FFFFF'}
        align={'center'}
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Téléphones, Tablettes, Ordinateurs
      </Typography>
    </Box>
  );
};

export default Nike;
