import React from 'react';
import { fetchUsers } from '../actions/actionCreators';

import { Row, Col, Table, Button } from 'react-bootstrap';

import UserItem from './userItem';
import UserModal from './userModal';

class Users extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        console.log(this.props)

        let items = []
        if (this.props.userReducer && this.props.userReducer.isFetchingUser == false) {
            const usersList = this.props.userReducer.list;
            Object.keys(usersList).map((idx) => items.push(<UserItem key={idx} idx={idx} user={usersList[idx]}/>))
        }

        return (
            <Row>
                <Col sm={9} smOffset={3} md={10} mdOffset={2} >
                    <h1>Users Dashboard</h1>
                    <Table striped responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>E-mail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </Table>

                    <Button bsStyle="primary" onClick={()=>this.props.showModal("USER_MODAL", {}, true)}>
                        Create User
                    </Button>

                    <UserModal {...this.props}/>
                </Col>
            </Row>
        );
    }

}

export default Users;