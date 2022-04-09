import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Tooltip disableTouchListener title="Retires et envoies tes colis chez nous !">
            <Button>
              <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? 'img/icon_site/mondial-relay.svg'
                    : 'img/icon_site/mondial-relay_blanc.svg'
                }
                webp={mode === 'light'
                  ? 'img/icon_site/webp/mondial-relay.webp'
                  : 'img/icon_site/webp/mondial-relay_blanc.webp'
                }
                alt='Mondial Relay'
                title='Mondial Relay'
                sx={{
                  alignItems: 'left',
                  height: 'auto',
                  width: 100,
                }}
              />
            </Button>
          </Tooltip>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box
              display={'flex'}
              component="a"
              href="/"
              width={1}
            >
              <Box
                component={'img'}
                src={
                  mode === 'light'
                    ? 'img/logo/logo_mm_ss.svg'
                    : 'img/logo/logo_mm_ss_blanc.svg'
                }
                webp={mode === 'light'
                  ? 'img/logo/webp/logo_mm_ss.webp'
                  : 'img/logo/webp/logo_mm_ss_blanc.webp'
                }
                alt='Mobile Minute'
                title='Mobile Minute'
                sx={{
                  height: 'auto',
                  width: 350
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item align={'center'} xs={12} md={12}>
        <Box sx={{ marginTop: 1 }}>
          <Tooltip disableTouchListener title="Un peu de lecture ?">
            <Button>
              <Link
                underline="none"
                component="a"
                href="/legal"
                sx={{ fontWeight: 1000 }}
                color={mode === 'light'
                  ? '#3b5899'
                  : 'white'}
                variant={'subtitle2'}
              >
                Mentions Légales & Conditions Générales
              </Link>
            </Button>
          </Tooltip>
        </Box>
        <Typography
          variant={'subtitle2'}
          gutterBottom
          sx={{
            fontWeight: 400,
            textAlign: 'center',
            color: 'text.secondary'
          }}
        >
          Tous droits réservés &copy; Mobile Minute 2022 - 17000 La Rochelle | Réalisé par
          <Link
            underline="none"
            component="a"
            target='_blank'
            href="https://www.facebook.com/giustinadevelopment"
            sx={{
              fontWeight: 400,
              textAlign: 'center',
              color: 'text.secondary'
            }}
            variant={'subtitle2'}>&nbsp;Giustina Development</Link>
        </Typography>
      </Grid>
    </Grid >
  );
};

export default Footer;
