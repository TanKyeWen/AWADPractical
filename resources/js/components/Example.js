/*
AWAD MIGRATION 
create table
php artisan make:migration create_student_table

migrate the file
php artisan migrate --path=/database/migrations/2025_02_26_012948_create_student_table.php

Create Controller
php artisan make:controller ControllerName

Create header component
php artisan make:component Header

Laravel new practical
composer create-project --prefer-dist laravel/Laravel
php artisan make:migration create_user
php artisan make:model modelname
php artisan make:controller ControllerName
php artisan make:component Header

composer install
composer update
npm audit fix --force
npm install
npm run watch
php artisan migrate:fresh
php artisan serve
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    DatePicker
  } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    constructor(props){
    super(props)
        this.state = {
            posts: [], //response of API into post state
            newPostModal: false,
            editPostModal: false,
            newPostData: {
                id: '',
                title: '',
                content: '',
                user_id: ''
            },
        }
    }

    loadPost(){
        axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
            console.log(response);
            this.setState({
                posts:response.data
            })
        })
    }
    addPost(user_id, title, content){
        axios.post("http://127.0.0.1:8000/api/post", {user_id, title, content})
        .then((response) => {
            console.log(response);
            this.loadPost();
            this.setState({
                newPostData: {id:"", title:"", content:"", user_id:"" }
            })
        })
    }
    // updatePost(){
    //     let {id, title, content, user_id} = this.state.updatePostData
    //     axios.put('http://127.0.0.1:8000/api/post/' + id, {title, content, user_id}).then((response) => {
    //         this.loadPost()
    //         this.setState({
    //             updatePostModel: false,
    //             newPostData: {id: '', title: '', content: '', user_id: ''}
    //         })
    //     })
    // }
    deletePost(id){
        axios.delete('http://127.0.0.1:8000/api/post/' + id).then((response) => {
            this.loadPost();
            alert(`Item ${id} has been deleted`);
        })
    }
    // callUpdatePost(id, title, content, user_id)
    // {
    //     this.setState({
    //         updatePostData:{id, title, content, user_id},
    //         updatePostModal: !this.state.updatePostModal
    //     })
    // }
    updatePost(){
        let {id, title, content, user_id } = this.state.newPostData
        axios.put('http://127.0.0.1:8000/api/post/'+ id,{
            title, content, user_id
        }).then((response) => {
            this.loadPost()
            this.setState({ //after execution, set all states to false
                newPostData: {id:"", title:"", content:"", user_id:"" }
            })
        })
    }
    toggleNewPostModal(){
        this.setState({
            newPostModal:!this.state.newPostModal
        })
    }

    toggleUpdatePostModel(){
        this.setState({
            editPostModal: !this.state.editPostModal
        })
    }

    componentDidMount(){
        this.loadPost();
    }
    componentWillMount(){
        this.loadPost();
    }

    render() {
        let posts = this.state.posts.map((post) => {
            return(
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>
                        <Button color="success" size="sm" className="mr-2" onClick={() => this.setState({
                            newPostData: {
                                id: post.id,
                                title: post.title,
                                content: post.content,
                                user_id: post.user_id
                              },
                              editPostModal: true
                            })}> Edit
                        </Button>
                        <Button color="danger" size="sm" className="mr-2" onClick={() => this.deletePost(post.id)}> 
                            Delete
                        </Button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="container">
                <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}>Add Post</Button>

                {/* Add Modal */}
                <Modal isOpen={this.state.newPostModal} toggle={this.toggleNewPostModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewPostModal.bind(this)}> Add New Post </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Label for = "ProductTitle">ProductTitle</Label>
                            <Input
                                id="ProductTitle"
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.ProductTitle = e.target.value;
                                    this.setState({ newProductData });
                                }}
                                />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "Product_description">Product Description</Label>
                            <Input
                                id="Product_description"
                                type="textarea"
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.Product_desciption = e.target.value;
                                    this.setState({ newProductData });
                                }}
                                />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "Manufacturing_date">Manufacturing Date</Label>
                            <Input
                                id="Manufacturing_date"
                                type="date"
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.Manufacturing_date = e.target.value;
                                    this.setState({ newProductData });
                                }}
                                />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "Quantity">Quantity</Label>
                            <Input
                                id="Quantity"
                                value={ 0 }
                                onChange={(e) => {
                                    let { newProductData } = this.state;
                                    newProductData.Quantity = e.target.value;
                                    this.setState({ newProductData });
                                }}
                                />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "User_id">User ID</Label>
                            <Input
                                id="User_id"
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
                            this.addPost(this.state.newPostData.user_id, this.state.newPostData.title, this.state.newPostData.content);
                            this.toggleNewPostModal();
                        }}> Add Post </Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewPostModal.bind(this)}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            

                {/* Edit Modal */}
                <Modal isOpen={this.state.editPostModal} toggle={this.toggleUpdatePostModel.bind(this)}>
                    <ModalHeader toggle={this.toggleUpdatePostModel.bind(this)}> Edit Post </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Label for = "title">Title</Label>
                            <Input
                                id="title"
                                value={this.state.newPostData.title}
                                onChange={(e) => {
                                    let { newPostData } = this.state;
                                    newPostData.title = e.target.value;
                                    this.setState({ newPostData });
                                }}
                                />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "content">Content</Label>
                            <Input
                                id="content"
                                value={this.state.newPostData.content}
                                onChange={(e) => {
                                    let { newPostData } = this.state;
                                    newPostData.content = e.target.value;
                                    this.setState({ newPostData });
                                }}
                                />
                        </FormGroup>

                        <FormGroup>
                            <Label for = "user_id">User ID</Label>
                            <Input
                                id="user_id"
                                value={this.state.newPostData.user_id}
                                onChange={(e) => {
                                    let { newPostData } = this.state;
                                    newPostData.user_id = e.target.value;
                                    this.setState({ newPostData });
                                }}
                                />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={() => {
                            this.updatePost();
                            this.toggleUpdatePostModel();
                        }}> Edit Post </Button>{' '}
                        <Button color="secondary" onClick={this.toggleUpdatePostModel.bind(this)}> Cancel </Button>
                    </ModalFooter>
                </Modal>

                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts}
                    </tbody>
                </Table>
            </div>
        );
    }
}
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}