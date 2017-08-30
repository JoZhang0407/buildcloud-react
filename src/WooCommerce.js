const WooCommerceAPI = require('woocommerce-api')
 const WooConn = new WooCommerceAPI({
  url: 'http://interiorworks.nz',
  consumerKey: 'ck_536196a02cb861d1262ba778c04490adae79edbb',
  consumerSecret: 'cs_186d60adc7144421dfa8c4bf3a7e0be759a8cc45',

  wpAPI: true,
  version: 'wc/v1'
});

export default function GetProducts() {

  return WooConn.getAsync('products?filter[limit]=200')
    .then(response => {
      //console.log(JSON.parse(response.toJSON().body))
      return JSON.parse(response.toJSON().body)
    }).catch(err => {
      return err
    })

}
//export default GetProducts