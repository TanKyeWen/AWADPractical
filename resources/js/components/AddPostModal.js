// AddPostModal.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap';
 
const AddPostModal = ({ isOpen, toggle, newPostData, onChange, addPost }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add New Post</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        id="title"
                        value={newPostData.title}
                        onChange={(e) => onChange('title', e.target.value)} // Updates the state in the parent component
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input
                        id="content"
                        value={newPostData.content}
                        onChange={(e) => onChange('content', e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="user_id">User ID</Label>
                    <Input
                        id="user_id"
                        value={newPostData.user_id}
                        onChange={(e) => onChange('user_id', e.target.value)}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={addPost}>Add Post</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};
 
export default AddPostModal;