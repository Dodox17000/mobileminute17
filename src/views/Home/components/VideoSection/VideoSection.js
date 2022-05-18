import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const VideoSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // position: 'absolute',
        alignItems: 'center',
        '&::after': {
          content: '""',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          width: 1,
          height: 1,
          zIndex: 3,
          background: theme.palette.primary.main,
          opacity: 0.2,
        },
      }}
    >
      <Box
        component={'video'}
        poster="/img/boutique/webp/poster-video.webp"
        preload="auto"
        width={1}
        height={0.5}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline
      >
        <source
          src="/video/Site.mp4"
          type="video/mp4"
        />
        <source
          src="/video/Site.ogg"
          type="video/ogg"
        />
        <source
          src="/video/Site.webm"
          type="video/webm"
        />
        <source
          src="/video/Site.mov"
          type="video/mov"
        />
      </Box>
    </Box>
  );
};

export default VideoSection;
