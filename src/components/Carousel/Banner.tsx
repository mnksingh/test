import React from 'react';
import ReactSiema from 'react-siema';

const images = ['banner.jpg'];

const SlideList = images.map(url => (
  <img key={url} src={`/assets/images/${url}`} alt={url.split('.')[0]} />
));

export default function Banner() {
  return <ReactSiema>{SlideList}</ReactSiema>;
}
