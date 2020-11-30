import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ListProductComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[]
        }

        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }


    addProduct(){
        this.props.history.push('add-product');
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res => {
            this.setState({products: this.state.products.filter(employee => product.id != id)});
        });
    }

    editProduct(id){
        this.props.history.push(`/update-product/${id}`);
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
               <div className ="row">
                    <button className="btn btn-primary" onClick={this.addProduct}>Add Product</button>
                </div>
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
                                       <td>
                                            <button onClick = { () => this.editProduct(product.id)} className="btn btn-warning">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick = { () => this.deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick = { () => this.viewProduct(product.id)} className="btn btn-info">View Info</button>
                                        </td>                                   
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