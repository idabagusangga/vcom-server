const axios = require('axios')

class WalmartController {
  static getProducts (req, res) {
    if (!req.query.q) {
      axios.get('http://api.walmartlabs.com/v1/search?query=iphone&format=json&apiKey=hsmapnzjjpgpwyg86c6423dk&numItems=4')
      .then(response => {
        let result = []
        response.data.items.forEach(item => {
          let prodObj = {
            name : item.name,
            price: item.salePrice,
            description: item.shortDescription,
            details: item.longDescription,
            image: item.mediumImage
          }
          result.push(prodObj)
        })
        res.status(200).json({
          data: result
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          err: err
        })
      })
    }
    else{
      axios.get(`http://api.walmartlabs.com/v1/search?query=${req.query.q}&format=json&apiKey=hsmapnzjjpgpwyg86c6423dk&numItems=4`)
      .then(response => {
        let result = []
        response.data.items.forEach(item => {
          let prodObj = {
            name : item.name,
            price: item.salePrice,
            description: item.shortDescription,
            details: item.longDescription,
            image: item.mediumImage
          }
          result.push(prodObj)
        })
        res.status(200).json({
          data: result
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          err: err
        })
      })
    }
  }

}
module.exports = WalmartController;