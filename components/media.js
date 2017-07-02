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

export default class Media extends React.Component {
 constructor(props) {
   super(props)

   this.state = {
     media: {},
     apiUrl: api.buildUrl({ paths: [api.WP, 'media', props.id] })
   }
 }

 componentDidMount() {
   fetchMedia(this.props.id).then(res => {
     this.setState({media: res})
   })
 }

 render() {

   return (
     <a className="product-thumb__link lightbox" itemProp="associatedMedia" itemScope itemType="http://schema.org/ImageObject" href="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg" data-size="1135x1550" data-pswp-uid={2}>
       <figure className="aspect-ratio" style={{ paddingBottom: '136.36363636364%' }}>
         <img
           width={220}
           height={300}
           className="product__image aspect-ratio__img lazyloaded "
           alt="Pretty Love Uriah / Vincent"
           itemProp="thumbnail"
           sizes="(max-width: 220px) 100vw, 220px"
           data-src="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg"
           data-srcset="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
           //srcSet="https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-220x300.jpg 220w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-55x75.jpg 55w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-440x600.jpg 440w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1-73x100.jpg 73w, https://www.aadliaare.ee/wp-content/uploads/2016/01/pretty_love_uriah_vincent1.jpg 1135w"
           //src={image.src}
         />
       </figure>
     </a>
   )
 }
}
