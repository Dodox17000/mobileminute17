import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'components/Image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const mock = [
  {
    title: 'Téléphones',
    description:
      'Bénéficiez d’un diagnostic et devis personnalisé, avec réparation immédiate en fonction de la manipulation nécessaire. La réparation de votre téléphone se fait directement sur place dans notre atelier en boutique.',
    illustration:
      '/img/reparation/téléphone.png',
    webp:
      '/img/reparation/webp/téléphone.webp',
  },
  {
    title: 'Ordinateurs',
    description:
      'Nous prenons le soin de diagnostiquer la/les panne(s) de votre appareil. Une fois identifiée(s), nous réalisons un devis et nous vous communiquons le prix de la réparation. Un délai vous sera alors communiqué en fonction de la prestation à réaliser.',
    illustration:
      '/img/reparation/ordinateur.png',
    webp:
      '/img/reparation/webp/ordinateur.webp',
  },
  {
    title: 'Tablettes',
    description:
      'Réalisation d’un diagnostic et devis personnalisé selon la référence de votre modèle. Les écrans cassés de vos tablettes nécessitent en général une réparation interne. Celle-ci sera donc obligatoirement ouverte afin de comprendre quel composant est à remplacer, et ce, dans les plus brefs délais.',
    illustration:
      '/img/reparation/tablette.png',
    webp:
      '/img/reparation/webp/tablette.webp',
  },
];

const Work = () => {

  return (
    <Box>
      <Grid container>
        {mock.map((item, i) => (
          <Grid
            data-aos="fade-up"
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            key={i}
            item
            container
            xs={12}
            spacing={0.5}
            direction={i % 2 === 1 ? 'row-reverse' : 'row'}
          >
            <Grid item container alignItems={'center'} xs={12} sm={6}>
              <Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Typography color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              container
              justifyContent={'center'}
              alignItems={'center'}
              xs={12}
              sm={6}
            >
              <Image
                component={LazyLoadImage}
                src={item.illustration}
                webp={item.webp}
                alt={item.title}
                title={item.title}
                width={1}
                maxWidth={'80%'}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Work;
