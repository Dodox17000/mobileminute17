/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Transfert = () => {

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
        Conversion et Numérisation
      </Typography>
    </Box>
  );
};

export default Transfert;
