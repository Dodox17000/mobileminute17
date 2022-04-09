import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const mock = [
  {
    image: '/img/number/information.webp',
    description:
      'Vos appareils sont peut-être obsolètes ; alors pour éviter tout déplacement inutile, il est préfèrable de nous appeler pour savoir si votre modèle peut être repris en magasin.',
    title: 'S’informer',
    author: {
      avatar: '/img/number/1.svg',
    },
  },
  {
    image: '/img/boutique/webp/boutique1.webp',
    description:
      'Venez en boutique sans rendez-vous pour faire estimer votre appareil. Les différents critères d’estimation sont l’esthétisme (rayures/impacts), l’année d’achat, la fonctionnalité (fonctionnel ou non / bugs récurrents), l’intervention (s’il a fait l’objet de réparation).',
    title: 'Se déplacer',
    author: {
      avatar: '/img/number/2.svg',
    },
  },
  {
    image: '/img/illustration-home/gamme.webp',
    description:
      'Si nous reprenons votre téléphone, tablette, ou ordinateur, vous pouvez bénéficier d’une remise directe en magasin sur le produit de votre choix, ou vous repartez avec l’estimation faite par nos experts.',
    title: '2 Possibilités',
    author: {
      avatar: '/img/number/3.svg',
    },
  },
];

const CaseStudies = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={10}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Reprise en magasin
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Bon état, abîmé ou pour pièces.
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Nous étudions toute proposition de reprise et/ou sous forme de bon d&apos;achat.
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} key={i}>
            <Box
              display={'block'}
              width={1}
              height={1}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <Box
                component={Card}
                width={1}
                height={1}
                boxShadow={4}
                display={'flex'}
                justifyContent={{
                  xs: 'center',
                  md: i % 2 === 1 ? 'flex-end' : 'flex-start',
                }}
                sx={{
                  minHeight: 300,
                  backgroundImage: `url("${item.image}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  '&:after': {
                    position: 'absolute',
                    content: '" "',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    zIndex: 1,
                    background: '#161c2d',
                    opacity: 0.6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    position: 'relative',
                    width: { xs: 1, md: '50%' },
                    height: 1,
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 2,
                  }}
                >
                  <Box>
                    <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box display={'flex'} alignItems={'center'}>
                        <Avatar
                          src={item.author.avatar}
                          sx={{ marginRight: 1 }}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Divider
                    sx={{
                      marginY: 2,
                      borderColor: 'common.white',
                      opacity: 0.4,
                    }}
                  />
                  <Box>
                    <Typography
                      variant={'h5'}
                      gutterBottom
                      sx={{ color: 'common.white' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      sx={{ color: 'common.white', opacity: 0.8 }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudies;
