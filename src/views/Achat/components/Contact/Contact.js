/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'secondary'}
        align={'center'}
      >
        Une demande de réparation / devis / estimation ?
      </Typography>
      <Typography fontWeight={700} variant={'h3'} gutterBottom align={'center'}>
        N'hésitez pas à nous contacter
      </Typography>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'text.secondary'}
        align={'center'}
      >
        Faire réparer vos appareils avec la garantie d'une pièce d'origine ou similaire. Un geste pour l'écologie et vos économies.
      </Typography>
      <Box marginTop={3} display={'flex'} justifyContent={'center'}>
        <Button
          component={'a'}
          href={'/'}
          variant="contained"
          color="primary"
          size="large"
          endIcon={
            <svg
              role={'img'}
              aria-label="Flèche directive"
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <title>Flèche directive</title>
              <desc>Flèche directive</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
        >
          Revenir au formulaire
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
