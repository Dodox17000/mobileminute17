/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Larq = () => {

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
        Nos Accessoires
      </Typography>
      <Typography
        variant="h6"
        component="p"
        sx={{color:'#FFFFF', textAlign:'center'}}
      >
       Coques, Chargeurs, Câbles, Écouteurs, Souris, Tapis, Housses de protection, Batteries Externes
      </Typography>
    </Box>
  );
};

export default Larq;
