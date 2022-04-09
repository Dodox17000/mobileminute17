import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'components/Image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: '/img/boutique/boutique1.jpg',
      webp: '/img/boutique/webp/boutique1.webp',
      rows: 1,
      cols: 2,
      title: 'Image du magasin intérieur',
    },
    {
      src: '/img/boutique/boutique2.jpg',
      webp: '/img/boutique/webp/boutique2.webp',
      title: 'Image du magasin extérieur',
    },
    {
      src: '/img/boutique/boutique3.jpg',
      webp: '/img/boutique/webp/boutique2.webp',
      title: 'Image du magasin intérieur',
    },
  ];

  return (
    <Box>
      <Box>
        <ImageList
          variant="quilted"
          cols={2}
          rowHeight={isMd ? 300 : 200}
          gap={isMd ? 16 : 4}
          sx={{
            overflowY: 'initial'
          }}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols} rows={item.rows}>
              <Image
                src={item.src}
                component={LazyLoadImage}
                alt={item.title}
                title={item.title}
                effect="blur"
                onClick={() => openLightbox(i)}
                wrapperProps={{
                  style: {
                    maxWidth: '100%',
                    maxHeight: '100%'
                  }
                }}
                sx={{
                  width: 1,
                  height: 1,
                  objectFit: 'cover',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={photos[currentImage].src}
          nextSrc={photos[(currentImage + 1) % photos.length].src}
          prevSrc={
            photos[(currentImage + photos.length - 1) % photos.length].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % photos.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>
  );
};

export default Gallery;
