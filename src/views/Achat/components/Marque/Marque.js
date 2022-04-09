import React from 'react';
import Box from '@mui/material/Box';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'components/Image';

const mock = [
  {
    img:'img/marques/apple.svg',
    alt:'apple',
    title:'apple'
  },
  {
    img:'img/marques/acer.svg',
    alt:'acer',
    title:'acer'
  },
  {
    img:'img/marques/dell.svg',
    alt:'dell',
    title:'dell'
  },
  {
    img:'img/marques/wiko.svg',
    alt:'wiko',
    title:'wiko'
  },
  {
    img:'img/marques/hp.svg',
    alt:'hp',
    title:'hp'
  },
  {
    img:'img/marques/oppo.svg',
    alt:'oppo',
    title:'oppo'
  },
  {
    img:'img/marques/mi.svg',
    alt:'mi',
    title:'mi'
  },
  {
    img: 'img/marques/sony.svg',
    alt:'sony',
    title:'sony'
  },
  {
    img:'img/marques/huawei.svg',
    alt:'huawei',
    title:'huawei'
  },
  {
    img:'img/marques/samsung.svg',
    alt:'samsung',
    title:'samsung'
  },
  {
    img:'img/marques/htc.svg',
    alt:'htc',
    title:'htc'
  },
];

const Marque = () => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
      {mock.map((item, i) => (
        <Box
          maxWidth={{ xs: 80, sm: 90 }}
          marginTop={{ xs: 1 }}
          marginRight={{ xs: 3, sm: 6, md: 12 }}
          key={i}
        >
          <Image
            component={LazyLoadImage}
            height={1}
            width={1}
            src={item.img}
            webp={item.img}
            alt={item.alt}
            title={item.title}
            sx={{
              filter: 'contrast(0)',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default Marque;
