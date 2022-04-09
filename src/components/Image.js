import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Box from '@mui/material/Box';

/**
 * Image component
 * @param {Object} props 
 * @param {String} props.src
 * @param {String} [props.webp]
 * @param {String} props.alt
 * @returns 
 */
const Image = ({ src, webp, alt, ...props }) => {
  if (webp) {
    const extension = src.split('.').pop();

    return (
      <picture>
        <source srcSet={webp} type="image/webp" />
        <source
          srcSet={src}
          type={`image/${extension === 'jpg' ? 'jpeg' : extension}`}
        />
        <Box component={LazyLoadImage} src={src} alt={alt} {...props} />
      </picture>
    );
  }

  return <Box component={LazyLoadImage} src={src} alt={alt} {...props} />;
};

export default Image;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  webp: PropTypes.string,
  alt: PropTypes.string.isRequired,
};
