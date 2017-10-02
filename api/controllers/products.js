import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message,
}, statusCode);

class ProductController {
  constructor(Product) {
    this.Product = Product; 
  }
  getAll() {
    
    return this.Product.findAll()
      .then(products => defaultResponse(products))
      .catch(error => errorResponse(error.message));
  }
  // getAll() {
  //   return this.Product.findAll({attributes: ['name']})
  //     .then(result => defaultResponse(result))
  //     .catch(error => errorResponse(error.message));
  // }

}

export default ProductController;
