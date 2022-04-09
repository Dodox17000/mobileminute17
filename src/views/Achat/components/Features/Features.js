/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Image from 'components/Image';

const Features = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={1}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
             Pourquoi protéger mon appareil ?
            </Typography>
            <Typography color="text.secondary" variant={'h6'}>
            Au-delà de l’aspect esthétique, un téléphone équipé vous permet :
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {[
              'La protection contre les rayures',
              'La pimitation des traces de doigts et d\'impacts',
              'D\'éviter le coût d’une réparation d’écran ou autres composants',
              'De préserver sa valeur ',
            ].map((item, i) => (
              <Grid item xs={12} key={i}>
                <Box
                  component={ListItem}
                  disableGutters
                  width={'auto'}
                  padding={0}
                >
                  <Box
                    component={ListItemAvatar}
                    minWidth={'auto !important'}
                    marginRight={2}
                  >
                    <Box
                      component={Avatar}
                      bgcolor={theme.palette.secondary.main}
                      width={20}
                      height={20}
                    >
                      <svg
                        role={'img'}
                        width={12}
                        aria-label="Puce"
                        height={12}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <title>Puce</title>
                        <desc>Puce</desc>
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <ListItemText primary={item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Image
            component={LazyLoadImage}
            src={
              mode === 'light'
                ? '/img/accessoire/compo2.png'
                : '/img/accessoire/compo2.png'
            }
            alt="Image Composition d'accessoire"
            title="Image Composition d'accessoire"
            effect="blur"
            width={1}
            height={'100%'}
            sx={{
              borderRadius: '2.5rem',
              filter:
                mode === 'dark'
                  ? 'brightness(0.7)'
                  : 'none',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Features;
