import * as api from '../components/api'

import React from 'react'
//import 'isomorphic-fetch'

function fetchMedia(idQuery) {

  const id = idQuery

  const resp = new Promise(resolve => {
    fetch(api.buildUrl({ paths: [api.WP, 'media', id] }))
      .then(req => {
        return req.json()
      })
      .then(media => {

        resolve(media)
      })
  })

  return resp
}

function calcAspectRatio(width, height) {
  const ar = (height / width) * 100

  return ar + '%'
}

export default class Media extends React.Component {
 constructor(props) {
   super(props)

   this.state = {
     loaded: false,
     media: {},
     aspectRatio: null,
     apiUrl: api.buildUrl({ paths: [api.WP, 'media', props.id] })
   }
 }

 componentDidMount() {
   fetchMedia(this.props.id).then(res => {
     this.setState({
       loaded: true,
       media: res,
       aspectRatio: calcAspectRatio(res.media_details.width, res.media_details.height)
      })
   })
 }

 render() {
    if (this.state.loaded !== true) {
        return null;
    }

    return (
      <a className={this.props.className} itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" href="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg" data-size="1135x1550" data-pswp-uid={2}>
        <figure className="aspect-ratio" style={{ paddingBottom: this.state.aspectRatio }}>
          <img
            width={this.state.media.media_details.width}
            height={this.state.media.media_details.height}
            className="product__image aspect-ratio__img lazyloaded"
            alt={this.props.title}
            itemProp="thumbnail"
            sizes="(max-width: 220px) 100vw, 220px"
            data-src="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg"
            data-srcset="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
            //srcSet="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
            src={this.state.media.media_details.sizes.large.source_url}
          />
        </figure>
      </a>
    )
  }
}
