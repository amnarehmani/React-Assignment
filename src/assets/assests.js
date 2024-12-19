import logo from './images/logo.png';
import product01 from './images/product01.jpg';
import product02 from './images/product02.jpg';
import product03 from './images/product03.jpg';
import product04 from './images/product04.jpg';
import product05 from './images/product05.jpg';
import product06 from './images/product06.jpg';
import product07 from './images/product07.jpg';
import product08 from './images/product08.jpg';
import candle from './images/candle.jpg';
import clock from './images/clock.jpg';
import shelf from './images/shelf.jpg';
import vase from './images/vase.jpg'

const Assets = {
  logo,
};

export const products = [
  {
    id: 1,
    name: "Wooden Arched Cabinet",
    image: product01, 
    price: "$299",
  },
  {
    id: 2,
    name: "Elegant Sofa",
    image: product02, 
    price: "$99",
  },
  {
    id: 3,
    name: "Modren Furniture",
    image: product03, 
    price: "$499",
  },
  {
    id: 4,
    name: "Wooden Table",
    image: product04, 

    price: "$250",
  },
  {
    id: 5,
    name: "Minimalist Chair",
    image: product05, 
    price: "$180",
  },
  {
    id: 6,
    name: "New Lightning",
    image: product06, 
    price: "$350",
  },
  {
    id: 7,
    name: "Luxury Dining Table",
    image: product07, 
    price: "$120",
  },
  {
    id: 8,
    name: "Cement Vase",
    image: product08, 
    price: "$80",
  },
];

export const newArrivals = [

  {
    id: 1,
    name: "Concrete Glow",
    image: candle,
    price: "$99",
  },

  
  {
    id: 2,
    name: "Clockwork Elegance",
    image: clock,
    price: "$180",
  },
  
  {
    id: 3,
    name: "Wall Haven",
    image: shelf,
    price: "$200",
  },
  
  {
    id: 4,
    name: "Concrete Vase",
    image: vase,
    price: "$99",
  },
]



export default Assets;
