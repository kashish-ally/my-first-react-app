import React, { Component } from 'react';
class Clothing extends Component {
    constructor(props) {
        super(props);
        this.state = { productList : [],loader: true}
    }
    componentDidMount(){
        fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/product').then(res => res.json()).then(res => this.setState({productList: res, loader:false}),5000)
    }
    render() { 
        return ( 
        <div className="App">
        <h2 className="section-heading" id="section-heading-first">
        Clothing for Men and Women
      </h2>
      <div id="clothing-container">
      {this.state.loader ? (<h1>Loading...</h1>) : (this.state.productList.length && this.state.productList.filter(product => product.isAccessory == false).map(product => 
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
      ))
      }
      </div>
      <h2 className="section-heading">Accessories for Men and Women</h2>
      <div id="accesories-container">
      {this.state.loader ? (<h1>Loading...</h1>) : (this.state.productList.length && this.state.productList.filter(product => product.isAccessory == true).map(product => 
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
      </div> );
    }
}
 
export default Clothing;