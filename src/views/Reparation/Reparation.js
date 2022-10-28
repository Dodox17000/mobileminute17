import React, { Suspense } from 'react';
import Main from 'layouts/Main';
import Container from 'components/Container';
import Box from '@mui/material/Box';
import {
  Consoles,
  Features,
  Work,
  Solutions
} from './components';
import Loader from 'components/Loader';

const Reparation = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Main>
        <Container>
          <Box>
            <Features />
          </Box>
        </Container>
        <Box bgcolor={'alternate.main'} >
          <Container>
            <Solutions />
          </Container>
        </Box>
        <Container bgcolor={'alternate.main'}>
          <Work />
        </Container>
        <Container bgcolor={'alternate.main'}>
          <Consoles />
        </Container>
      </Main>
    </Suspense>
  );
};

export default Reparation;
