import React, {Component} from 'react'
import {HashRouter, Route} from 'react-router-dom'
import Nav from './Nav.js'
import Products from './Products.js'
import Home from './Home.js'
import CreateProduct from './CreateProduct.js'
import axios from 'axios'

export default class App extends Component{

    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('/api/products')
        .then((res)=>{
            this.setState({products: res.data})
        })
        .catch((err)=>console.log(err))
    }

    createProduct(product){
        axios.post('/api/products', product)
        .then(()=>axios.get('/api/products'))
        .then((_products)=>this.setState({products: _products}))
    }

    deleteProduct(id){
        axios.delete(`/api/products/${id}`)
        .then(()=>axios.get('/api/products'))
        .then((_products)=>this.setState({products: _products}))
    }

    render(){
        const sales = this.state.products.filter((product)=>product.discount>0)
        return (
            <HashRouter>
            <div id="main">
                <h1>ACME Products/Sales</h1>
                <div className='column container'>
 
                </div>
                <div id="router">
                    <Route render={(({location, productcount, salecount})=>
                                    Nav({location, productcount: this.state.products.length, salecount: sales.length}))}/>
                    <Route exact path='/products' render={(()=>Products(this.state.products))} />
                    <Route path='/products/sales' render={(()=>Products(sales))} />
                    <Route path='/products/create' component={CreateProduct}/>
                    <Route exact path='/' component={Home} />
                </div>
            </div>
            </HashRouter>
        )
    }
}

