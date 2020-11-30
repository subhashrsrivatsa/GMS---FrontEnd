import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class UpdateProductComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id:this.props.match.params.id,
            productName: '',
            productCategory: '',
            productQuantity: ''
        };
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeProductCategoryHandler = this.changeProductCategoryHandler.bind(this);
        this.changeProductQuantityHandler = this.changeProductQuantityHandler.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }


    componentDidMount() {
        ProductService.getProductById(this.state.id).then((res) => {
            let product = res.data;
            this.setState({ productName: product.productName,
                productCategory: product.productCategory,
                productQuantity: product.productQuantity });
        });
    }

    changeProductNameHandler = (event) => {
        this.setState({ productName: event.target.value });
    };

    changeProductCategoryHandler = (event) => {
        this.setState({ productCategory: event.target.value });
    };

    changeProductQuantityHandler = (event) => {
        this.setState({ productQuantity: event.target.value });
    };

    updateProduct = (e) => {
        e.preventDefault();
        let product = { productName: this.state.productName, productCategory: this.state.productCategory, productQuantity: this.state.productQuantity };
        console.log('product => ' + JSON.stringify(product));

        ProductService.updateProduct(product, this.state.id).then(res => {
            this.props.history.push('/products')
        });
    };

    cancel() {
        this.props.history.push('/products');
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input placeholder="product name" name="productName" className="form-control"
                                            value={this.state.productName} onChange={this.changeProductNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Product Category</label>
                                        <input placeholder="product category" name="productCategory" className="form-control"
                                            value={this.state.productCategory} onChange={this.changeProductCategoryHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Product Quantity</label>
                                        <input placeholder="product quantity" name="productQuantity" className="form-control"
                                            value={this.state.productQuantity} onChange={this.changeProductQuantityHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateProduct}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateProductComponent;