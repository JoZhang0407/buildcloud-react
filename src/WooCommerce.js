const WooCommerceAPI = require('woocommerce-api')
 const WooConn = new WooCommerceAPI({
  url: '',
  consumerKey: '',
  consumerSecret: '',

  wpAPI: true,
  version: 'wc/v1'
});

class GetProducts {
  static getProductsByCategory () {
    return WooConn.getAsync('products?filter[limit]=200')
      .then(response => {
        // console.log(JSON.parse(response.toJSON().body))
        return JSON.parse(response.toJSON().body).products
      }).catch(err => { return err })
  }
}

export default GetProducts
