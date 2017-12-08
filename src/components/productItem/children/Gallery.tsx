import * as React from "react";
import Media from "../../../components/media/Media";
import { MediaItemProps } from "../../../services/mediaApi/mediaApi";

interface Props {
  images: MediaItemProps[];
  alt?: string;
}

const Gallery = ({ images = null, alt }: Props) => {
  const thumbs =
    !!images &&
    images.map((image, index: number) => (
      <li key={index}>
        <Media
          image={image}
          className="product-thumb__link lightbox"
          alt={alt}
        />
      </li>
    ));

  return (
    <ul
      className="product-thumb__gallery"
      itemScope={true}
      itemType="http://schema.org/ImageGallery"
    >
      {thumbs}
    </ul>
  );
};

export default Gallery;
