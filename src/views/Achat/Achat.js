import React, { Suspense, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {
  Welcome,
  Process,
  Larq,
  Marque,
  About,
  Photo,
  Transfert,
  Nike,
  Features,
  Features2,
  Contact,
} from './components';
import Loader from 'components/Loader';

const Achat = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }

      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };

    jarallaxInit();
  });


  const theme = useTheme();

  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });

  return (
    <Suspense fallback={<Loader />}>
      <Main>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'90vh'}
          display={'flex'}
          alignItems={'center'}
          id="Agency__portfolio-item--js-scroll"
        >
          <Box
            component={LazyLoadImage}
            className={'jarallax-img'}
            sx={styles(
              '/img/accessoire/parallaxe.png',
            )}
          />
          <Container>
            <Nike />
          </Container>
        </Box>
        <Box
          minHeight={'40vh'}
          display={'flex'}
          alignItems={'center'}
          marginTop={-13}
          paddingTop={13}
        >
          <Container>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Welcome />
              <Box marginTop={4}>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'40vh'}
          display={'flex'}
          alignItems={'center'}
        >
          <Container>
            <Process />
          </Container>
        </Box>
        <Container >
          <Box sx={{ textAlign: 'center', marginBottom: 5 }}>
            <Typography variant={'h4'} sx={{ fontWeight: 850 }}>
              Nos Marques:
            </Typography>
          </Box>
          <Marque />
          <Box sx={{ marginTop: 5, textAlign: 'right' }}>
            <Typography variant={'p'} sx={{ fontWeight: 700 }}>
              Et bien d&#39;autres...
            </Typography>
          </Box>
        </Container>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'40vh'}
          display={'flex'}
          alignItems={'center'}
          bgcolor={'alternate.main'}
          id="Agency__portfolio-item--js-scroll"
        >
          <Container>
            <Larq />
          </Container>
        </Box>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Photo />
          </Container>
        </Box>
        <Box
          minHeight={'25vh'}
          display={'flex'}
          alignItems={'center'}
          bgcolor={'alternate.main'}
        >
          <Container>
            <Typography
              variant="h3"
              align={'center'}
              color={'#FFFFF'}
              sx={{
                fontWeight: 500,
                marginBottom: 10,
              }}>
              La protection de mon appareil
            </Typography>
            <Features />
          </Container>
        </Box>
        <Box
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'25vh'}
          display={'flex'}
          bgcolor={'alternate.main'}
          alignItems={'center'}
        >
          <Container>
            <Features2 />
          </Container>
        </Box>
        <Box
          className={'jarallax'}
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'35vh'}
          display={'flex'}
          alignItems={'center'}
          id="Agency__portfolio-item--js-scroll"
        >
          <Container>
            <Transfert />
          </Container>
        </Box>
        <Box
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          minHeight={'70vh'}
          display={'flex'}
          alignItems={'center'}
        >
          <Container>
            <About />
          </Container>
        </Box>
        <Box
          data-jarallax
          data-speed="0.2"
          position={'relative'}
          bgcolor={'alternate.main'}
          minHeight={'70vh'}
          display={'flex'}
          alignItems={'center'}
        >
          <Container>
            <Contact />
          </Container>
        </Box>
      </Main>
    </Suspense>
  );
};

export default Achat;
