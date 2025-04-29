// Student Name: Tan Kye Wen
// Student ID: 2103121
// Student Test Group: A

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newProductModal: true,
            newProductData: {
                ProductTitle: '',
                Product_description: '',
                Manufacturing_date: '',
                Quantity: '0',
                User_id: '',
            },
        }
    }

    addProduct() {
        let { ProductTitle, Product_description, Manufacturing_date, Quantity, User_id } = this.state.newProductData;
        axios.post("http://127.0.0.1:8000/api/product", { ProductTitle, Product_description, Manufacturing_date, Quantity, User_id })
            .then((response) => {
                console.log(response);
                this.setState({
                    newProductData: { ProductTitle: "", Product_description: "", Manufacturing_date: "", Quantity: "0", User_id: "" }
                })
            })
    }

    togglenewProductModal() {
        this.setState({
            newProductModal: !this.state.newProductModal
        });
    }

    componentDidMount() {
        this.setState({ newProductModal: true });
    }

    render() {
        return (
            <div className="container">
                <Modal isOpen={this.state.newProductModal}>
                    <ModalHeader toggle={this.togglenewProductModal.bind(this)}> Add New Product </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Label for="ProductTitle">ProductTitle</Label>
                            <Input
                                id="ProductTitle"
                                value={this.state.newProductData.ProductTitle}
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.ProductTitle = e.target.value;
                                    this.setState({ newProductData });
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Product_description">Product Description</Label>
                            <Input
                                id="Product_description"
                                type="textarea"
                                value={this.state.newProductData.Product_description}
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.Product_description = e.target.value; // Fixed typo here
                                    this.setState({ newProductData });
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Manufacturing_date">Manufacturing Date</Label>
                            <Input
                                id="Manufacturing_date"
                                type="date"
                                value={this.state.newProductData.Manufacturing_date}
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.Manufacturing_date = e.target.value;
                                    this.setState({ newProductData });
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Quantity">Quantity</Label>
                            <Input
                                id="Quantity"
                                value={this.state.newProductData.Quantity} // Use state value instead of hardcoded 0
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.Quantity = e.target.value;
                                    this.setState({ newProductData });
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="User_id">User ID</Label>
                            <Input
                                id="User_id"
                                value={this.state.newProductData.User_id}
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.User_id = e.target.value;
                                    this.setState({ newProductData });
                                }}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => {
                            this.addProduct();
                            this.togglenewProductModal();
                        }}> Add Product </Button>{' '}

                        <Button color="secondary" onClick={this.togglenewProductModal.bind(this)}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}