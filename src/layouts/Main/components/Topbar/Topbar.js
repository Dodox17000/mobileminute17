import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
//import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

const Topbar = ({ onSidebarOpen, colorInvert }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:'center', width:1, zIndex: 10000 }}>
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Mobile-Minute"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'img/logo/logo_m_bleu.svg'
              : 'img/logo/logo_m_blanc.svg'
          }
          webp={
            mode === 'light' && !colorInvert
              ? 'img/logo/webp/logo_m_bleu.svg'
              : 'img/logo/webp/logo_m_blanc.webp'
          }
          alt='mobile-minute-logo-simple'
          title='mobile-minute-logo-simple'
          height={0.5}
          width={0.5}
        />
      </Box>
      {/* <Typography variant={'span'}
        color={mode === 'light' && !colorInvert
          ? 'black'
          : 'white'}>

        <svg
          width={20}
          height={14}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        &nbsp;&nbsp;05 16 49 06 47
      </Typography> */}
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box marginLeft={4}>
          <Tooltip disableTouchListener disableFocusListener title="">
            <Button >
              <Link
                underline="none"
                color={mode === 'light' && !colorInvert
                  ? '#3b5899'
                  : 'white'}
                sx={{ fontWeight: 700 }}
                href="/reparation">
                Réparation
              </Link>
            </Button>
          </Tooltip>
        </Box>
        <Box marginLeft={4}>
          <Tooltip disableTouchListener disableFocusListener title="">
            <Button >
              <Link
                underline="none"
                color={mode === 'light' && !colorInvert
                  ? '#3b5899'
                  : 'white'}
                sx={{ fontWeight: 700 }}
                href="/vente">
                Vente
              </Link>
            </Button>
          </Tooltip>
        </Box>
        <Box marginLeft={4}>
          <Tooltip disableTouchListener disableFocusListener title="">
            <Button >
              <Link
                underline="none"
                color={mode === 'light' && !colorInvert
                  ? '#3b5899'
                  : 'white'}
                sx={{ fontWeight: 700 }}
                href="/reprise">
                Reprise
              </Link>
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
