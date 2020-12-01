import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)
       
        this.state= {
            id: this.props.match.params.id,
            product: {}
        }
    }
    
    componentDidMount(){
        ProductService.getProductById(this.state.id).then(res => {
            this.setState({product: res.data});           
        })
    }

    render() {
        return (
            <div>
                <br/>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Selected Product Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>Product Name : </label>
                            <div> { this.state.product.productName } </div>
                        </div>
                        <div className = "row">
                            <label>Product Category : </label>
                            <div> { this.state.product.productCategory } </div>
                        </div>
                        <div className = "row">
                            <label>Product Quantity : </label>
                            <div> { this.state.product.productQuantity } </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProductComponent;