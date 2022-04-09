import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Courses,
  Hero,
  CaseStudies,
  Partners,
} from './components';
import Loader from 'components/Loader';

const Vente = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main>
        <Box sx={{ marginTop: 13 }}>
          <Hero />
        </Box>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <CaseStudies />
          </Container>
        </Box>
        <Box>
          <Container>
            <Courses />
          </Container>
        </Box>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Partners />
          </Container>
        </Box>
      </Main>
    </Suspense>
  );
};

export default Vente;
