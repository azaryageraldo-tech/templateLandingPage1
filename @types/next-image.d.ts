declare module 'next/image' {
  import { ComponentType, ImgHTMLAttributes } from 'react';

  type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    width?: number;
    height?: number;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    unoptimized?: boolean;
  };

  const Image: ComponentType<ImageProps>;
  export default Image;
} 