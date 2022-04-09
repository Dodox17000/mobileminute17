/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'components/Image';
import Avatar from '@mui/material/Avatar';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const mock = [
  {
    title: 'Spécialiste de la Réparation',
    subtitle:
      'Nous nous engageons à commercialiser uniquement des pièces d’origine et/ou de qualité originale sous garantie quelque soit la marque',
    icon: <Image component={LazyLoadImage} effect="blur" src="/img/icon_site/icon-fix.svg" webp="/img/icon_site/icon-fix.svg" alt="icon réparation" title="icon-reparation"
      sx={{ marginLeft: '8%', height: { xs: 'auto', md: 1 }, maxHeight: { xs: 300, md: 1 }, width: 0.90, maxWidth: 1 }} />
  },
  {
    title: 'Vendeur Conseil',
    subtitle:
      'Nous vendons des produits neufs, d\'occasions ou reconditionnés et vous conseillons le produit qui correspond le mieux à vos besoins',
    icon: (
      <Image component={LazyLoadImage} effect="blur" src="/img/icon_site/icon-sale.svg" webp="/img/icon_site/webp/icon-sale.webp" alt="icon réparation" title="icon-reparation"
        sx={{ marginLeft: '18%', marginTop: '5%', height: { xs: 'auto', md: 1 }, maxHeight: { xs: 300, md: 1 }, width: 0.70, maxWidth: 1 }} />
    ),
  },
  {
    title: 'Nous rachetons vos appareils',
    subtitle:
      'Nous étudions toutes propositions de reprise d\'ordinateurs, smartphones et tablettes',
    icon: (
      <Image component={LazyLoadImage}  effect="blur" src="/img/icon_site/icon-rachat.svg" webp="/img/icon_site/webp/icon-rachat.webp" alt="icon réparation" title="icon-reparation"
        sx={{ marginLeft: '5%', marginTop: '5%', height: { xs: 'auto', md: 1 }, maxHeight: { xs: 300, md: 1 }, width: 0.90, maxWidth: 1 }} />
    ),
  },
];

const Icons = () => {
  const theme = useTheme();

  return (
    <Box  sx={{marginTop: '2.5em', position:'relative'}}> 
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={1}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="5000"
                  component={Avatar}
                  width={80}
                  height={80}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h5'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Icons;
