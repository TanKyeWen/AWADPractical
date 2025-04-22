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
    Input
  } from 'reactstrap';
import axios from 'axios';

export default class Example extends Component {
    constructor(props){
    super(props)
        this.state = {
            posts: [], //response of API into post state
            newPostModal: false,
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
        })
    }
    callUpdatePost(id, title, content, user_id)
    {
        this.setState({
            updatePostData:{id, title, content, user_id},
            updatePostModal: !this.state.updatePostModal
        })
    }
    updatePost(){
        let {id, title, content, user_id } = this.state.updatePostData
            axios.put('http://127.0.0.1:8000/api/post/'+ this.state.updatePostData.id,{
                title, content, user_id
            }).then((response) => {
                this.loadPost()
                this.setState({ //after execution, set all states to false
                    updatePostModal: false,
                    updatePostData: {id:"", title:"", content:"", user_id:"" }
                })
            })
    }
    toggleNewPostModal(){
        this.setState({
            newPostModal:!this.state.newPostModal
        })
    }

    toggleUpdatePostModal(){
        this.setState({
            updatePostModal:!this.state.updatePostModal
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
                        <Button color="success" size="sm" className="mr-2"> Edit
                        </Button>
                        <Button color="danger" size="sm" className="mr-2"> Delete
                        </Button>
                    </td>
                </tr>
            )
        })
        
        return (
            <div className="container">
                <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}>Add Post</Button>
                <Modal isOpen={this.state.newPostModal} toggle={this.toggleNewPostModal.bind(this)}>
                    <ModalHeader toggle={this.toggleNewPostModal.bind(this)}> Add New Post </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Label for = "title">Title</Label>
                            <Input id = "title"></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for = "content">Content</Label>
                            <Input id = "content"></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for = "user_id">User ID</Label>
                            <Input id = "user_id"></Input>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}> Add Post </Button>{' '}
                        <Button color="secondary" onClick={this.toggleNewPostModal.bind(this)}> Cancel </Button>
                    </ModalFooter>
                </Modal>

                <Button color='primary'>Add new post</Button>
                
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