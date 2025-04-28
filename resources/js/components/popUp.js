import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import AddPostModal from './addPostModal';
import EditPostModal from './editPostModal';
 
export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            newPostModal: false,
            editPostModal: false,
            newPostData: { title: "", content: "", user_id: "" },
            editPostData: { id: "", title: "", content: "", user_id: "" },
        };
    }
 
    loadPost() {
        axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
            console.log('Posts loaded:', response.data);
            this.setState({ posts: response.data });
        }).catch(error => {
            console.error('Error loading posts:', error);
        });
    }
 
    addPost() {
        axios.post('http://127.0.0.1:8000/api/post', this.state.newPostData)
            .then(() => {
                this.loadPost();
                this.setState({
                    newPostModal: false,
                    newPostData: { title: "", content: "", user_id: "" }
                });
            })
            .catch(error => {
                console.error('Error adding post:', error);
                alert('Failed to add post.');
            });
    }
 
    updatePost() {
        const { id, title, content, user_id } = this.state.editPostData;
        axios.put(`http://127.0.0.1:8000/api/post/${id}`, { title, content, user_id })
            .then(() => {
                this.loadPost();
                this.setState({
                    editPostModal: false,
                    editPostData: { id: "", title: "", content: "", user_id: "" }
                });
            })
            .catch(error => {
                console.error('Error updating post:', error);
                alert('Failed to update post.');
            });
    }
 
    // Method to delete a post
    deletePost(id) {
        console.log('Delete button clicked for post ID:', id);
        axios.delete(`http://127.0.0.1:8000/api/post/${id}`)
            .then(() => {
                console.log('Post deleted successfully:', id);
                this.loadPost();
            })
            .catch(error => {
                console.error('Error deleting post:', error);
                alert('Failed to delete post.');
            });
    }
 
    toggleNewPostModal() {
        this.setState({ newPostModal: !this.state.newPostModal });
    }
 
    toggleEditPostModal() {
        console.log('Toggling edit modal, new state:', !this.state.editPostModal);
        this.setState({ editPostModal: !this.state.editPostModal });
    }
 
    handleNewPostDataChange(field, value) {
        this.setState(prevState => ({
            newPostData: { ...prevState.newPostData, [field]: value }
        }));
    }
 
    handleEditPostDataChange(field, value) {
        this.setState(prevState => ({
            editPostData: { ...prevState.editPostData, [field]: value }
        }));
    }
 
    editPost(id, title, content, user_id) {
        console.log('Edit button clicked:', { id, title, content, user_id });
        this.setState({
            editPostData: { id, title, content, user_id },
            editPostModal: true
        }, () => {
            console.log('State after editPost:', this.state);
        });
    }
 
    componentWillMount() {
        this.loadPost();
    }
 
    render() {
        const posts = this.state.posts.map(post => {
            console.log('Post data:', post);
            return (
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td>
                        <Button
                            color="success"
                            size="sm"
                            onClick={() => this.editPost(post.id, post.title, post.content, post.user_id)}
                        >
                            Edit
                        </Button>
                        <Button
                            color="danger"
                            size="sm"
                            onClick={() => this.deletePost(post.id)}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>
            );
        });
 
        return (
            <div className="container">
                <Button color="primary" onClick={this.toggleNewPostModal.bind(this)}>Add Post</Button>
 
                <AddPostModal
                    isOpen={this.state.newPostModal}
                    toggle={this.toggleNewPostModal.bind(this)}
                    newPostData={this.state.newPostData}
                    onChange={this.handleNewPostDataChange.bind(this)}
                    addPost={this.addPost.bind(this)}
                />
 
                <EditPostModal
                    isOpen={this.state.editPostModal}
                    toggle={this.toggleEditPostModal.bind(this)}
                    postData={this.state.editPostData}
                    onChange={this.handleEditPostDataChange.bind(this)}
                    updatePost={this.updatePost.bind(this)}
                />
 
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>{posts}</tbody>
                </Table>
            </div>
        );
    }
}
 
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}