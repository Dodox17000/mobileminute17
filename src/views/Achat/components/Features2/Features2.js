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

const Features2 = () => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box>
          <Image
            component={LazyLoadImage}
            src={
              mode === 'light'
                ? '/img/reparation/cassé.jpg'
                : '/img/reparation/webp/cassé.webp'
            }
            alt="Image Description"
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
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-left' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
              Quels risques engendrent un écran cassé ?
            </Typography>
            <Typography color="text.secondary" variant={'h6'}>
              Une vitre brisée peut présenter plusieurs problèmes :
            </Typography>
          </Box>
          <Grid container spacing={1}>
            {[
              'Le risque d’infiltration : avec un écran cassé la poussière ou l’eau peut se glisser dans des interstices et endommager les composants',
              'Une possibilité de blessure : malgré une surcouche plastifiée de petits bouts de verre peuvent se détacher',
              'Un appareil fragilisé : l’écran participe à la solidité des appareils, qui, de plus en plus légers, seront plus sujets à se plier sans le soutien de la vitre.',
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
                        aria-label="puce"
                        width={12}
                        height={12}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <title>puce</title>
                        <desc>puce</desc>
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
    </Grid>
  );
};

export default Features2;
