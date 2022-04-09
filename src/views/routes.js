import React from 'react';

import {
  Home as HomeView,
  Legal as LegalView,
  NotFoundCover as NotFoundCoverView,
  Reparation as ReparationView,
  Achat as AchatView,
  Vente as VenteView,
} from 'views';

const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomeView {...params} />,
  },
  {
    path: '/legal',
    renderer: (params = {}) => <LegalView {...params} />,
  },
  {
    path: '/reparation',
    renderer: (params = {}) => <ReparationView {...params} />,
  },
  {
    path: '/reprise',
    renderer: (params = {}) => <AchatView {...params} />,
  },
  {
    path: '/vente',
    renderer: (params = {}) => <VenteView {...params} />,
  },
  {
    path: '/not-found-cover',
    renderer: (params = {}) => <NotFoundCoverView {...params} />,
  },
];

export default routes;
