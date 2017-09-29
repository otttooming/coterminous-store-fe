const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('cart', '/cart/');
routes.add('checkout', '/checkout/');
routes.add('blog', '/blog/:slug?');
routes.add('product', '/product/:slug?');
routes.add('products', '/products/:slug?');
routes.add('about', '/about-us/:foo(bar|baz)');
routes.add('order', '/order/:slug?');
