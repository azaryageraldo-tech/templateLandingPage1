declare module 'next/link' {
  import { AnchorHTMLAttributes, ComponentType } from 'react';

  type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
  };

  const Link: ComponentType<LinkProps>;
  export default Link;
} 