import * as React from "react";
import styled from "styled-components";
import { MediaItemProps } from "../../services/mediaApi/mediaApi";
import Icon from "../../components/icon/Icon";

interface Props {
  image?: MediaItemProps;
  className?: string;
  alt?: string;
  handleClick?: (event: any) => void;
  isProduct?: boolean;
  sizes?: Size[];
}

interface Size {
  size: string;
  mediaCondition?: string;
}

interface FigureProps {
  isProduct?: boolean;
}

const NoImagePlaceholder = styled(Icon)`
  transform: translate3d(-50%, -50%, 0);
  left: 50%;
  top: 50%;
`;

const Figure = styled.figure`
  background-color: ${(props: FigureProps) =>
    props.isProduct ? "#fff" : "transparent"};
  border-radius: ${(props: FigureProps) => (props.isProduct ? "4px" : "0")};
`;

const buildSizes = (sizes: Size[]) => {
  if (sizes) {
    return (
      sizes
        .map(size => {
          if (size.mediaCondition) {
            return `${size.mediaCondition} ${size.size}`;
          }
          return `${size.size}`;
        })
        .join(",") || undefined
    );
  }
  return undefined;
};

const Media = ({ image, className, alt, isProduct, sizes = [] }: Props) => {
  if (!image) {
    return (
      <Figure
        isProduct={isProduct}
        itemScope={true}
        itemProp="associatedMedia"
        itemType="http://schema.org/ImageObject"
        className="aspect-ratio"
        style={{ paddingBottom: `100%` }}
      >
        <NoImagePlaceholder
          icon="image"
          width={48}
          height={48}
          className="product__image aspect-ratio__img lazyloaded"
        />
      </Figure>
    );
  }

  const { dimensions, imageSizes } = image;
  const { width, height, aspectRatio } = dimensions;
  const srcSet = imageSizes.map(item => `${item.source_url} ${item.width}w`);
  return (
    <Figure
      isProduct={isProduct}
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
        sizes={buildSizes(sizes)}
        srcSet={srcSet.join()}
      />
    </Figure>
  );
};

export default Media;
