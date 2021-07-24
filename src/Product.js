import React, { useState} from 'react';

const Product = ({ name, price, onShowProduct, onCalculateTotal }) => {

  const [ quantity, setQuantity ] = useState(0);

  const buy = () => {
    //alert(" You selected this product. ");
    setQuantity( quantity + 1 );
    onCalculateTotal(price);
  }

  return (
    <>
    <h3> {name} </h3>
    <h4> ${price} </h4>
    <button onClick={buy}>buy</button>
    <button onClick={() => onShowProduct(name)}>show</button>
    <h3> Quantity {quantity} </h3>
    <hr/>
    </>
  )
}

const Total = ({totalCash}) => {
  return (
    <h3> Total cash : {totalCash} </h3>
  )
}

const ProductList = () => {

  const [ total, setTotal ] = useState(0);
  const [ products, setProducts ] = useState([
    { id: 1, name: "Android", price :150 },
    { id: 1, name: "Apple", price :170 },
    { id: 1, name: "Nokia", price :100 },
  ]);
  
  const calculateTotal = (price) => {
    setTotal( total + price );
  }
  
  const showProduct = (name) => {
    alert(" You Selected " + name );
  }

  return(
    <div>
    { products.map((p) => (
      <Product
      key = {p.id}
      name = {p.name}
      price = {p.price}
      onCalculateTotal={calculateTotal}
      onShowProduct={showProduct} />
    )
    )}

    {/* <Product  name="Android"  price={150}  onCalculateTotal={calculateTotal} onShowProduct={showProduct} /> */}

    <Total
     totalCash={total} />
    </div>
  )
}

export default ProductList;