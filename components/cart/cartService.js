const productService = require('../products/productService');

exports.add = (productId, cart) => {
  const foundProduct = cart.products.find(product => product.id === productId);
  if (foundProduct)
    foundProduct.quantity = foundProduct.quantity + 1;
  else {
    cart.products.push({ id: productId, quantity: 1 });
  }
};

exports.cartDetails = async (cart) => {
  const cartDetails = { ...cart };
  cartDetails.products = await Promise.all(cartDetails.products.map(async product => {
    const productInfo = await productService.get(product.id);
    return {
      ...product, name: productInfo.name, price: productInfo.price
    };
  }));
  return cartDetails;
};

exports.initCart = () => ({
  products: [],
});