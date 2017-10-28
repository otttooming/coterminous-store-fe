import * as React from "react";

interface ImageProps {
  width: number;
  height: number;
  aspectRatio: number;
}

function calcAspectRatio(width: number, height: number) {
  const aspectRatio = height / width * 100;

  return aspectRatio;
}

export default class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: !!this.props.image ? true : false,
      media: !!this.props.image ? this.props.image : {},
      aspectRatio: !!this.props.image
        ? calcAspectRatio(
            this.props.image.media_details.width,
            this.props.image.media_details.height
          )
        : null,
    };
  }

  render() {
    const { width, height, aspectRatio } = this.state;

    if (this.state.loaded !== true) {
      return null;
    }

    return (
      <figure
        itemScope={true}
        itemProp="associatedMedia"
        itemType="http://schema.org/ImageObject"
        className="aspect-ratio"
        style={{
          paddingBottom: `${aspectRatio}%`,
        }}
      >
        <img
          width={width}
          height={height}
          className="product__image aspect-ratio__img lazyloaded"
          alt={this.props.title}
          itemProp="thumbnail"
          sizes="(max-width: 220px) 100vw, 220px"
          data-src="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg"
          data-srcset="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
          //srcSet="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
          src={
            this.state.media.media_details.sizes.large !== undefined
              ? this.state.media.media_details.sizes.large.source_url
              : this.state.media.media_details.sizes.shop_single.source_url
          }
        />
      </figure>
    );
  }
}
