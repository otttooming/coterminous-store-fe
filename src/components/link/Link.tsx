import * as React from 'react';
import { LocationChangeProps, SeoProps } from '../../common/products/typings';

interface Props {
  location: LocationChangeProps;
  seo?: SeoProps;
  children: React.ReactNode;
  className?: string;
  onLocationChange?: (props: LocationChangeProps) => void;
}

const Link = ({
  children,
  onLocationChange,
  location,
  className,
  seo,
}: Props) => {
  const { type, view, pathName, query } = location;

  return (
    <a
      // href={url}
      // itemProp="url"
      className={className}
      onClick={(e: React.SyntheticEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onLocationChange({
          type,
          view,
          pathName,
          query,
        });
      }}
    >
      {children}
    </a>
  );
};

export default Link;
