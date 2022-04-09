import React from 'react';
//import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'components/Image';
import Button from '@mui/material/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Reseau = () => {
// const theme = useTheme();
  const icon=[
    {
      src: 'https://img.icons8.com/fluency/240/000000/instagram-new.png',
      webp: 'https://img.icons8.com/fluency/240/000000/instagram-new.png',
      alt: 'Lien Instagram Mobile-Minute',
      title: 'Lien Intagram Mobile-Minute',
      href: 'https://www.instagram.com/mobile.minute/',
      width: '68px'
    },
    {
      src: 'https://img.icons8.com/fluency/96/000000/facebook-new.png',
      webp: 'https://img.icons8.com/fluency/96/000000/facebook-new.png',
      alt: 'Lien facebook Mobile-Minute',
      title: 'Lien facebook Mobile-Minute',
      href: 'https://www.facebook.com/mobileminutelarochelle',
      width: '64px'
    },
  ];
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Pour nous suivre :
        </Typography>
      </Box>    
      <Box sx={{display:'flex', width:1, justifyContent:'center'}}>
        {icon.map((item, i) => (
          <Box key={i}>
            <Button
              target="_blank" 
              href={item.href}>
              <Image
                component={LazyLoadImage}
                src={item.src}
                webp={item.webp}
                alt={item.alt}
                title={item.title}
                sx={{
                  justifyContent: 'space-around',
                  height: 1,
                  width: `${item.width}`
                }}
              />
            </Button>
          </Box>
        ))}
      </Box>  
    </Box>
  );
};

export default Reseau;
