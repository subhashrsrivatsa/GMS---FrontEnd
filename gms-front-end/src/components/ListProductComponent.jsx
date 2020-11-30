import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ListProductComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }


    componentDidMount(){
        ProductService.getProducts().then((res) =>{
            this.setState({products: res.data});
        });
    }


    render() {
        return (
            <div>
               <h2 className="text-center">Products List</h2>
               <br/>
               <div className="row">
                   <table className="table table-striped table-bordered">
                       <thead>
                           <tr>
                               <th>Product Name</th>
                               <th>Product Category</th>
                               <th>Product Quantity</th>
                               <th>Actions</th>
                           </tr>
                       </thead>

                       <tbody>
                           {
                               this.state.products.map(
                                   product => 
                                   <tr key={product.id}>
                                       <td>{product.productName}</td>
                                       <td>{product.productCategory}</td>
                                       <td>{product.productQuantity}</td>                                       
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div>
            </div>
        );
    }
}

export default ListProductComponent;