import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'components/Image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const mockLeftGrid = [
  {
    image: 'img/accessoire/housse.png',
    description: 'Offrez une protection absolue à votre téléphone avec une coque antichoc vous permettra de ne pas casser votre appareil. Idéale pour vos déplacements, ajoutez une touche de style et d’individualité à votre appareil avec nos étuis robustes.',
    title: 'Coque avec ou sans rabat / Housse de protection',
    webp: 'img/accessoire/webp/housse.webp'
  },
  {
    image: 'img/accessoire/batterie.png',
    description: 'Partez en voyage l’esprit lèger. Avec ces batteries vous pouvez effectuer plusieurs recharges au cours de votre périple sur plusieurs jours.',
    title: 'Batterie externe',
    webp: 'img/accessoire/webp/batterie.webp'
  },
];

const mockMiddleGrid = [
  {
    image: 'img/accessoire/protection-écran.png',
    description: 'Le verre trempé et le film hydrogel vont permettre de réduire la probabilité de casser votre écran lors d’une chute. Gardez un écran sans dommage et avec toutes ses fonctionnalités.',
    title: 'Verre Trempé ou Film Hydrogel',
    webp: 'img/accessoire/webp/protection-écran.webp'
  },
  {
    image: 'img/accessoire/clavier.png',
    description:
      'Clavier (avec ou sans pavé numérique), clavier pour tablette, PC ou Mac, rétroéclairé pour les noctambules ou encore clavier gamer. Souris ergonomique, à poids personnalisable avec capteur DPI 12 000.',
    title: 'Clavier avec ou sans fil et Souris',
    webp: 'img/accessoire/webp/clavier.webp'
  },
];

const mockRightGrid = [
  {
    image: 'img/accessoire/câbles.png',
    description: 'Trouvez de nombreux modèles de chargeur pour téléphone et tablette. Fast Charge, chargeur classique, chargeur USB allume-cigare, cordon micro usb… Choisissez le chargeur pour mobile qui correspond à vos besoins !',
    title: 'Câbles avec ou sans prise secteur',
    webp: 'img/accessoire/webp/câbles.webp'
  },
  {
    image: 'img/accessoire/audio.png',
    description: 'Réduction active du bruit pour un son immersif mais qui permet d’entendre ce qu’il se passe autour de vous avec un confort optimal.',
    title: 'Écouteurs sans fil / Casques Audio',
    webp: 'img/accessoire/webp/audio.webp'
  },
];

const Column = ({ data }) => {
  const theme = useTheme();
  return (
    <Box>
      {data.map((item, i) => (
        <Box
          key={i}
          sx={{
            marginBottom: { xs: 2, sm: 3 },
            '&:last-child': { marginBottom: 0 },
          }}
        >
          <Box
            boxShadow={1}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&:hover': {
                '& img': {
                  transform: 'scale(1.2)',
                },
                '& .portfolio-massonry__main-item': {
                  bottom: 0,
                },
              },
              '& .lazy-load-image-loaded': {
                display: 'flex !important',
              },
            }}
          >
            <Image
              component={LazyLoadImage}
              height={1}
              width={1}
              src={item.image}
              webp={item.webp}
              alt={item.title}
              title={item.title}
              effect="blur"
              maxHeight={{ xs: 400, sm: 600, md: 1 }}
              sx={{
                transition: 'transform .7s ease !important',
                transform: 'scale(1.0)',
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
            />
            <Box
              position={'absolute'}
              bottom={'-100%'}
              left={0}
              right={0}
              padding={4}
              bgcolor={'background.paper'}
              className={'portfolio-massonry__main-item'}
              sx={{ transition: 'bottom 0.3s ease 0s' }}
            >
              <Box
                component={'svg'}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 100.1"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  transform: 'translateY(-90%)',
                  zIndex: 2,
                  width: 1,
                }}
              >
                <path
                  fill={theme.palette.background.paper}
                  d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                ></path>
              </Box>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

Column.propTypes = {
  data: PropTypes.array.isRequired,
};

const Photo = () => {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Column data={mockLeftGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockMiddleGrid} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Column data={mockRightGrid} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Photo;
