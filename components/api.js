export const SITEURL = 'https://spiceflow.net.ee'

export const APIURL =  'https://spiceflow.net.ee/wp-json/wc/v2/products?consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9&per_page=16'

export const WC = 'wp-json/wc/v2'
export const WP = 'wp-json/wc/v2'
export const WPMENUS = 'wp-json/wp-api-menus/v2'
export const APISECRET = 'consumer_key=ck_27c96da6c28aa2d9022ef35d824607189f76b549&consumer_secret=cs_10ed7d30416d147277f0c07f8e43e6f98e0d2bf9'

export function buildUrl(props) {
    // {paths: [], parameters: []}
    let url = []

    url.push(SITEURL)

    if (props.paths === undefined || props.paths.length === 0) {
      return url.join('') + '?' + APISECRET
    }

    props.paths.map((path) => {
      url.push('/')
      url.push(path)
    })

    console.log(props.parameters);

    if (props.parameters === undefined || props.parameters.length === 0) {
      return url.join('') + '?' + APISECRET
    }

    url.push('?')

    props.parameters.map((parameter, i) => {
      url.push(parameter)

      props.parameters.length === i + 1 ? '' : url.push('&')
    })

    return url.join('') + '&' + APISECRET
}
