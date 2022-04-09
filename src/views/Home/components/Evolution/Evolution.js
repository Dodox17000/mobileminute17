import React from 'react';
import Typed from 'react-typed';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Container from 'components/Container';

const Evolution = () => {

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        Recycler pour mieux consommer
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Économie rime avec 
          {' '}
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            <Typed
              strings={['Écologie.']}
              typeSpeed={100}
              loop={true}
            />
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="p" component="p" color="text.secondary">
          Notre savoir-faire est la réparation de vos appareils téléphoniques et informatiques pour qu&apos;ils puissent perdurer dans le temps et vous éviter l&apos;achat d&apos;un nouvel appareil. 
          <br/>
          <br/>
          Nous reconditionnons des téléphones, tablettes et ordinateurs dans notre atelier Rochelais pour leur donner une seconde vie et pouvoir vous les proposer au meilleur prix.
          <br/>
          
          <br/>
          Ensemble, nous contribuons à préserver l&apos;environnement de l&apos;impact des nouvelles technologies sur la planète.
        </Typography>
      </Box>
    </Box>
  );

  const RightSide = () => {
    const sliderOpts = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <Box
        sx={{
          height: { xs: 'auto', md: 1 },
          '& .slick-slide img': {
            objectFit: 'cover',
          },
          '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
            height: { xs: 'auto', md: 1 },
          },
          '& .slick-prev, & .slick-next': {
            zIndex: 2,
            bottom: 0,
            top: '100%',
            left: '100%',
            right: 0,
            transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
            marginLeft: theme.spacing(-2),
            width: 32,
            height: 32,
            '&:before': {
              fontSize: 32,
            },
          },
          '& .slick-prev': {
            marginLeft: theme.spacing(-7),
          },
          '& .lazy-load-image-loaded': {
            height: 1,
            width: 1,
          },
        }}
      >
        <Slider {...sliderOpts}>
          {[
            'img/illustration-home/smartphone.webp',
            'img/illustration-home/ordinateur-tablette.webp',
            'img/illustration-home/smartphone2.webp',
            'img/illustration-home/mac.webp',
          ].map((item) => (
            <Box
              key={item}
              component={LazyLoadImage}
              effect="blur"
              src={item}
              height={{ xs: 'auto', md: 1 }}
              maxHeight={{ xs: 300, md: 1 }}
              width={1}
              maxWidth={1}
            />
          ))}
        </Slider>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
          minHeight={{ xs: 'auto', md: 600 }}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={'flex'}
            alignItems={'center'}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                    clipPath: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                    shapeOutside: {
                      xs: 'none',
                      md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
                    },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Evolution;
