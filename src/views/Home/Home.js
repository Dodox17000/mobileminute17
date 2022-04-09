import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import { JsonLd } from 'react-schemaorg';
import Main from 'layouts/Main';
import Container from 'components/Container';
import { Icons, Reseau, Gallery, Contact, Evolution, VideoSection } from './components';
import Typography from '@mui/material/Typography';
import Loader from 'components/Loader';

const Home = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Main>
        <JsonLd
          item={{
            '@context': 'https://schema.org',
            '@type': 'GeneralContractor',
            name: 'mobile-minute',
            legalName: 'Mobile Minute',
            image: '/img/boutique/webp/boutique1.webp',
            url: '/img/boutique/webp/boutique1.webp',
            slogan: 'Spécialiste Téléphonie & Informatique',
            description: 'Vente, Reprise, et Réparation de matériel informatique et téléphonie',
            disambiguatingDescription: 'Spécialiste Téléphonie & Informatique',
            currenciesAccepted: 'EUR',
            logo: '/img/logo_mm.e.png',
            telephone: '05 16 49 06 47',
            email: 'mobileminute@outlook.fr',
            opens: '10:00',
            closes: '19:00',
            openingHours: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            numberOfEmployees: 2,
            employees: ['Cédric Deilhes', 'Alex', 'Baptiste Martin'],
            founder: ['Cédric Deilhes', 'Alex', 'Baptiste Martin'],
            foundingDate: '2017',
            foundingLocation: 'La Rochelle',
            areaServed: 'La Rochelle',
            hasPOS: 'Charente-Maritime',
            photo: '/img/logo/logo_mm_ss.svg',
            address: '18 rue Dupaty, 17000 - La Rochelle',
            hasMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.0534803639811!2d-1.1524261039700248!3d46.160212646330955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480153ba76c023d9%3A0xd2e090b4baec86d8!2sMobile%20Minute!5e0!3m2!1sfr!2sfr!4v1644572142333!5m2!1sfr!2sfr',
            owns: [
              {
                name: 'Mobile Minute',
                category: 'entreprise',
                image: '/img/logo/logo_mm_ss.svg',
                url: '/img/logo/logo_mm_ss.svg',
              },
              {
                name: 'Mobile Minute Boutique',
                category: 'entreprise',
                image: '/img/boutique/webp/boutique2.webp',
                url: '/img/boutique/webp/boutique2.webp',
              },
              {
                name: 'Mobile Minute Boutique intérieur',
                category: 'entreprise',
                image: '/img/boutique/webp/boutique1.webp',
                url: '/img/boutique/webp/boutique1.webp',
              },
              {
                name: 'Vente Téléphone',
                category: 'téléphones',
                image: '/img/illustration-home/smartphone.webp',
                url: '/img/illustration-home/smartphone.webp',
              },
              {
                name: 'Vente Tablette',
                category: 'tablettes',
                image: '/img/illustration-home/ordinateur-tablette.webp',
                url: '/img/illustration-home/ordinateur-tablette.webp',
              },
              {
                name: 'Vente Ordinateur',
                category: 'ordinateurs',
                image: '/img/illustration-home/ordinateur-tablette.webp',
                url: '/img/illustration-home/ordinateur-tablette.webp',
              },
              {
                name: 'Vente chargeurs',
                category: 'accessoires',
                image: '/img/accessoire/câbles.png',
                url: '/img/accessoire/câbles.png',
              },
              {
                name: 'Vente accessoires audio',
                category: 'accessoires',
                image: '/img/accessoire/audio.png',
                url: '/img/accessoire/audio.png',
              },
              {
                name: 'Vente câbles',
                category: 'accessoires',
                image: '/img/accessoire/câbles.png',
                url: '/img/accessoire/câbles.png',
              },
              {
                name: 'Vente coques',
                category: 'accessoires',
                image: '/img/accessoire/compo2.png',
                url: '/img/accessoire/compo2.png',
              },
              {
                name: 'Vente souris',
                category: 'accessoires',
                image: '/img/accessoire/clavier.png',
                url: '/img/accessoire/clavier.png',
              },
              {
                name: 'Vente clavier',
                category: 'accessoires',
                image: '/img/accessoire/clavier.png',
                url: '/img/accessoire/clavier.png',
              },
              {
                name: 'Vente batterie externe',
                category: 'accessoires',
                image: '/img/accessoire/batterie.png',
                url: '/img/accessoire/batterie.png',
              },
              {
                name: 'Vente protection-écran',
                category: 'accessoires',
                image: '/img/accessoire/protection-écran.png',
                url: '/img/accessoire/protection-écran.png',
              },
              {
                name: 'Convertion numérique',
                category: 'service',
                image: '/img/illustration-home/cassette.webp',
                url: '/img/illustration-home/cassette.webp',
              },
              {
                name: 'Réparation',
                category: 'téléphones',
                image: '/img/reparation/téléphone.png',
                url: '/img/reparation/téléphone.png',
              },
              {
                name: 'Réparation',
                category: 'tablettes',
                image: '/img/reparation/tablette.png',
                url: '/img/reparation/tablette.png',
              },
              {
                name: 'Réparation',
                category: 'ordinateurs',
                image: '/img/reparation/ordinateur.png',
                url: '/img/reparation/ordinateur.png',
              },
              {
                name: 'Entreprise',
                category: 'entreprise',
              },
              {
                name: 'Accessoires',
                category: 'accessoires',
              },
              {
                name: 'Service',
                category: 'service',
              },
              {
                name: 'Téléphones',
                category: 'téléphones',
              },
              {
                name: 'Ordinateurs',
                category: 'ordinateurs',
              },
              {
                name: 'Tablettes',
                category: 'tablettes',
              },
            ],
            knowsLanguage: 'Français',
          }}
        />
        <Typography
          variant="h1"
          align={'center'}
          color={'#FFFFF'}
          sx={{
            fontWeight: 900,
            textTransform: 'uppercase',
            display: 'none',
          }}
        >Mobile Minute</Typography>
        <Box sx={{ display: 'block', position: 'relative' }}>
          <VideoSection />
        </Box>
        <Box>
        </Box>
        <Container
          sx={{
            display: 'block',
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 2000, display: 'flex' }}>
            <Icons />
          </Box>
        </Container>
        <Container
          sx={{
            position: 'relative',
            '&::after': {
              position: 'absolute',
              content: '""',
              zIndex: 1,
              top: 0,
              left: 0,
              height: '100%',
            },
          }}
        >
        </Container>
        <Box bgcolor={'alternate.main'} sx={{ marginTop: 0 }}>
          <Evolution />
        </Box>
        <Box sx={{ position: 'relative', marginTop: '6rem', marginBottom: '2rem' }}>
          <Reseau />
        </Box>
        <Box>
          <Container sx={{}}>
            <Gallery />
          </Container>
        </Box>
        <Box bgcolor={'alternate.main'} sx={{ padding: 5, marginTop: 4 }} >
          <Contact />
        </Box>
      </Main>
    </Suspense>
  );
};

export default Home;
