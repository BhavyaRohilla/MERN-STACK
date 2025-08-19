// Importing modules
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing module');
// console.log(shippingCost);
// console.log(price, tq);
// addToCart('bread', 5);

// import * as ShoppingCart from './shoppingCart.js';
// // console.log(ShoppingCart);
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);
/*
import add, {
  addToCart,
  totalPrice as price,
  tq,
  cart,
} from './shoppingCart.js';
add('Pizza', 2);
console.log(cart);
*/

/*
console.log('start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');
*/

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = getLastPost();
// console.log(lastPost);

// NOT very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
// console.log(await getLastPost());
