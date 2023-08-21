import React from 'react';
import imagePath from './image.png'
import { Img } from 'remotion';

export const StillTest: React.FC = () => {

  return (
    <Img
      src={imagePath}
    />
  );
}