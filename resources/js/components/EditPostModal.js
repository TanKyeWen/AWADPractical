import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from 'reactstrap';
 
const EditPostModal = ({ isOpen, toggle, postData, onChange, updatePost }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit Post</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        id="title"
                        value={postData.title}
                        onChange={(e) => onChange('title', e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="content">Content</Label>
                    <Input
                        id="content"
                        value={postData.content}
                        onChange={(e) => onChange('content', e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="user_id">User ID</Label>
                    <Input
                        id="user_id"
                        value={postData.user_id}
                        onChange={(e) => onChange('user_id', e.target.value)}
                        disabled
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={updatePost}>Save Changes</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};
 
export default EditPostModal;