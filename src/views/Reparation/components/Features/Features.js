/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'components/Image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const mock = [
  {
    title: 'Diagnostiquer',
    subtitle:
      'À partir des informations fournies et du modèle de l\'appareil, nous diagnostiquons la/les panne(s).',
    icon: (
      <Image effect="blur"
        component={LazyLoadImage}
        src={'img/icon_site/icon-loupe.svg'}
        webp={'img/icon_site/webp/ison-loupe.webp'} alt="icon loupe" title="icon loupe"
        sx={{ marginLeft: '5%', marginTop: '10%', height: { xs: 'auto', md: 1 }, maxHeight: { xs: 300, md: 1 }, width: 0.90, maxWidth: 1 }} />
    ),
  },
  {
    title: 'Évaluer',
    subtitle:
      'En fonction du diagnostic, nous évaluons la possibilité de la réparation ainsi que le montant.',
    icon: (
      <Image effect="blur"
        component={LazyLoadImage}
        src={'img/icon_site/icon-évaluation.svg'}
        webp={'img/icon_site/webp/icon-évaluation.webp'} alt="icon évaluation" title="icon évaluation"
        sx={{ marginLeft: '6%', marginTop: '5%', height: { xs: 'auto', md: 1 }, maxHeight: { xs: 300, md: 1 }, width: 0.90, maxWidth: 1 }} />
    ),
  },
  {
    title: 'Réparer',
    subtitle:
      'Suivant l\'évaluation, nous pouvons réaliser la réparation dans les plus brefs délais.',
    icon: (
      <Image effect="blur"
        component={LazyLoadImage}
        src={'img/icon_site/icon-clef.svg'}
        webp={'img/icon_site/webp/icon-clef.webp'} alt="icon réparation" title="icon réparation"
        sx={{ marginLeft: '12%', marginTop: '5%', height: { xs: 'auto', md: 1 }, maxHeight: { xs: 300, md: 1 }, width: 0.80, maxWidth: 1 }} />
    ),
  },
];

const Features = () => {
  const theme = useTheme();
  return (
    <Box sx={{marginTop: '4.5rem'}}>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.main'}
          align={'center'}
        >
          Que Réparons nous ?
        </Typography>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Téléphones, Ordinateurs, Tablettes, Consoles
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          Obtenez la meilleure prestation en nous conﬁant la réparation de votre produit.
          Récupérez votre appareil comme neuf après seulement 1 heure (selon réparation).
          Tous les composants sont rigoureusement testés en atelier avant et après la réparation.
        </Typography>
      </Box>
      <Box sx={{marginTop: '5.5rem'}}>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Box
                sx={{ width: 1, height: 1, marginTop: '2rem' }}
                data-aos={'fade-up'}
                data-aos-delay={i * 100}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'flex-start'}
                >
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant={'p'} color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
