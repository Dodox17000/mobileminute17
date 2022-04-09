import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';

const SidebarNav = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          to="/"
          width={{ xs: 100, md: 120 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'img/logo/logo_m_bleu.svg'
                : 'img/logo/logo_m_blanc.svg'
            }
            webp={
              mode === 'light'
                ? 'img/logo/webp/logo_m_bleu.webp'
                : 'img/logo/webp/logo_m_blanc.webp'
            }
            alt='mobile-minute-logo-simple'
            title='mobile-minute-logo-simple'
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={1} paddingY={2}>
        <Box sx={{ marginLeft: 4 }}>
          <Tooltip disableTouchListener disableFocusListener title="">
            <Button >
              <Link
                underline="none"
                color={mode === 'light'
                  ? '#3b5899'
                  : 'white'}
                sx={{ fontWeight: 700 }}
                href="/reparation">
                Réparation
              </Link>
            </Button>
          </Tooltip>
        </Box>
        <Box sx={{ textAlign: 'right', marginTop: 4 }}>
          <Tooltip disableTouchListener disableFocusListener title="">
            <Button >
              <Link
                underline="none"
                color={mode === 'light'
                  ? '#3b5899'
                  : 'white'}
                sx={{ fontWeight: 700 }}
                href="/vente">
                Vente
              </Link>
            </Button>
          </Tooltip>
        </Box>
        <Box sx={{ textAlign: 'right', marginLeft: 0, marginTop: 4 }}>
          <Tooltip disableTouchListener disableFocusListener title="">
            <Button >
              <Link
                underline="none"
                color={mode === 'light'
                  ? '#3b5899'
                  : 'white'}
                sx={{ fontWeight: 700 }}
                href="/reprise">
                Reprise
              </Link>
            </Button>
          </Tooltip>
        </Box>
        {/* <Box sx={{ textAlign: 'right', marginTop: 4 }} >
          <Tooltip disableTouchListener disableFocusListener title=''>
            <Button >
              <Link
                underline="none"
                color={mode === 'light'
                  ? '#3b5899'
                  : 'white'}
                sx={{ fontWeight: 1000 }}
              >
                Contact
              </Link>
            </Button>
          </Tooltip>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
