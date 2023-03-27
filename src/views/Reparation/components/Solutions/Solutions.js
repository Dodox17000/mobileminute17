import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Image from 'components/Image';

const mock = [
  {
    title: 'Hardware',
    description:
      '\u2022 Écran LCD \u2022 Batterie \u2022 Connectique de charge \u2022 Autres connectiques \u2022 Caméra Avant/Arrière \u2022 Haut-parleur, etc...',
    illustration:
      'img/reparation/hardware.jpg',
    illustrationWebp:
      'img/reparation/webp/hardware.webp',
    color: colors.blue[200],
  },
  {
    title: 'SoftWare',
    description:
      '\u2605 Nettoyage \u2605 Installation de disque dur \u2605 Transfert de données \u2605 Formatage de données \u2605 Réinitialisation.',
    illustration:
      'img/reparation/software.jpg',
    illustrationWebp:
      'img/reparation/webp/software.webp',
    color: colors.purple[200],
  },
];

const Solutions = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box sx={{marginTop:'4rem'}}>
      <Box marginBottom={8}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
        >
          Comment les réparons-nous ?
        </Typography>
        <Typography
          variant="h4"
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            marginTop: 2,
            fontWeight: 700,
          }}
        >
          De l&apos;aspect esthétique aux composants
        </Typography>
        <Typography variant={'h6'} color={'text.secondary'} data-aos={'fade-up'}>
        Nous nous engageons à commercialiser uniquement des pièces d’origine et/ou
        de qualité originale sous garantie quelque soit la marque.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {mock.map((item, i) => (
          <Grid
            key={i}
            item
            xs={12}
            md={6}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box
              component={Card}
              height={1}
              bgcolor={alpha(item.color, 0.2)}
              boxShadow={0}
              sx={{
                transform: i % 2 === 1 ? { md: 'translateY(80px)' } : 'none',
              }}
            >
              <CardContent sx={{ padding: 4 }}>
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  marginBottom={{ xs: 2, md: 4 }}
                  sx={{
                    '& .lazy-load-image-loaded': {
                      maxWidth: { xs: '100%', md: '100%' },
                    },
                  }}
                >
                  <Image
                    component={LazyLoadImage}
                    effect="blur"
                    alt="HardWare Software"
                    title="HardWare Software"
                    webp={item.illustrationWebp}
                    src={item.illustration}
                    maxWidth={1}
                    sx={{borderRadius: '10px'}}
                  />
                </Box>
                <Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant={'p'} color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Solutions;
