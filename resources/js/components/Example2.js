import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from 'reactstrap';


export default class Example extends Component{
    constructor(){
        super()
        this.state={
            post: []
        }
    }
    
    render() {
        return (
            <div className="container">
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
                        <td>1</td>
                        <td>Post 1</td>
                        <td>Meowwwww</td>
                        <td>
                            <Button color="success" size="sm" outline> Edit </Button>
                            <Button color="danger" size="sm" outline> Delete </Button>
                        </td>
                    </tbody>
                </Table>
            </div>
        );
    }
};

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
