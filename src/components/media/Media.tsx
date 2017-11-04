import * as React from "react";
import { MediaItemProps } from "../../services/mediaApi/mediaApi";

interface Props {
  image: MediaItemProps;
  className?: string;
  alt?: string;
  handleClick?: (event: any) => void;
}

const Media = ({ image, className, alt }: Props) => {
  const { width, height, aspectRatio } = image.dimensions;
  const srcSet = image.sizes.map(item => `${item.source_url} ${item.width}w`);
  return (
    <figure
      itemScope={true}
      itemProp="associatedMedia"
      itemType="http://schema.org/ImageObject"
      className="aspect-ratio"
      style={{ paddingBottom: `${aspectRatio}%` }}
    >
      <img
        width={width}
        height={height}
        className="product__image aspect-ratio__img lazyloaded"
        alt={alt}
        itemProp="thumbnail"
        sizes={`(max-width: ${width}px) 100vw, ${width}px`}
        srcSet={srcSet.join()}
      />
    </figure>
  );
};

export default Media;
