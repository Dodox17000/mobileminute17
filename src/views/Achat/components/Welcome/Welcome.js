/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Welcome = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        align={'center'}
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        Produits neufs, d'occasion ou reconditionnés
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.secondary"
        align={'center'}
        sx={{
          fontWeight: 400,
        }}
      >
        Acheter des produits chez nous est avant tout un enjeu écologique.
        <br /> 
        Des protections et des accessoires appropriés prolongent la durée de vie de votre appareil.
      </Typography>
    </Box>
  );
};

export default Welcome;
