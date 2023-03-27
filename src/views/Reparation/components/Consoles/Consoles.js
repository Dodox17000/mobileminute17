import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'components/Image';

const Consoles = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography component={'span'} variant="h3" sx={{ fontWeight: 700 }}>
          Penser à {' '}
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'primary'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            vos consoles de jeux !
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color={'text.secondary'}>
        Nous faisons la maintenance de vos consoles : changement de disque dur et pâte termique, nettoyage, ventilateur etc...
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={'flex-start'}
        marginTop={4}
      >
        <Box maxWidth={70} marginTop={2} marginRight={4}>
          <Image
            component={LazyLoadImage}
            height={1}
            width={350}
            src="img/icon_site/console-marque.svg"
            webp="img/icon_site/console-marque.svg"
            alt="marques de console"
            title="marques de console"
          />
        </Box>
      </Box>
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
              maxWidth: '96%',
            }}
          >
            <Box>
              <Box
                position={'relative'}
                zIndex={2}
                maxWidth={1}
                height={'auto'}
                sx={{ verticalAlign: 'middle' }}
              >
                <Image
                  component={LazyLoadImage}
                  height={1}
                  width={1}
                  src={'img/reparation/consoles.png'}
                  webp={'img/reparation/webp/consoles.webp'}
                  alt={'Consoles de jeux vidéo'}
                  title={'Consoles de jeux vidé'}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Consoles;
