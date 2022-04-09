/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const Map = () => {
  const theme = useTheme();
  return (
    <Box sx={{ marginLeft: 1.5 }}>
      <Box>
        <Box marginBottom={3}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
      <Box marginY={3} component={LazyLoadComponent}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d977.0534803639811!2d-1.1524261039700248!3d46.160212646330955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480153ba76c023d9%3A0xd2e090b4baec86d8!2sMobile%20Minute!5e0!3m2!1sfr!2sfr!4v1644572142333!5m2!1sfr!2sfr'
          style={{
            minHeight: 300,
            borderRadius: 8,
            filter:
              theme.palette.mode === 'dark'
                ? 'grayscale(0.5) opacity(0.7)'
                : 'none',
          }}
        />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant={'subtitle1'}>
            <svg
              width={20}
              height={15}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            &nbsp;&nbsp;05 16 49 06 47
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography sx={{ textAlign: 'right'}} variant={'subtitle1'}>
            <svg
              width={20}
              height={15}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            &nbsp;&nbsp;mobileminute@outlook.fr</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: 'center'}} variant={'subtitle1'}>
            <svg
              width={25}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            &nbsp;&nbsp;18 rue Dupaty, 17000 - La Rochelle
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: 'center'}} variant={'subtitle1'}>
            <svg
              width={25}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            &nbsp;&nbsp; Du Lundi au Samedi de 10h à 19h
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;
