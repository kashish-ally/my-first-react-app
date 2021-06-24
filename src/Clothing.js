import axios from 'axios';
import React, { Component, useState, useEffect } from 'react';
const Clothing = ()=> {
    // constructor(props) {
    //     super(props);
    //     this.state = { productList : [],loader: true}
    // }
    const [productList, setProducts] = useState([]);
    useEffect(()=> {
        //fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product').then(res => res.json()).then(res => this.setState({productList: res, loader:false}),5000);
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/product').then(res => setProducts(res.data));
    },[]);
        return ( 
        <div className="App">
        <h2 className="section-heading" id="section-heading-first">
        Clothing for Men and Women
      </h2>
      <div id="clothing-container">
      {productList.length && (productList.filter(product => product.isAccessory == false).map(product => 
        <div className="item">
          <div className="item-image">
            <img src={product.preview}/>
          </div>
          <div className="item-content">
            <h3 className="item-heading">{product.name}</h3>
            <h4 className="item-brand">{product.brand}</h4>
            <h3 className="item-price">{product.price}</h3>
          </div>
        </div>
      ))}
      </div>
      <h2 className="section-heading">Accessories for Men and Women</h2>
      <div id="accesories-container">
      {productList.length && productList.filter(product => product.isAccessory == true).map(product => 
        <div className="item">
          <div className="item-image">
            <img src={product.preview}/>
          </div>
          <div className="item-content">
            <h3 className="item-heading">{product.name}</h3>
            <h4 className="item-brand">{product.brand}</h4>
            <h3 className="item-price">{product.price}</h3>
          </div>
        </div>
      )}
      </div>
      </div> );
}
 
export default Clothing;