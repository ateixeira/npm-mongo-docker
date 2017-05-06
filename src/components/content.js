import React from 'react';
import { fetchUsers } from '../actions/actionCreators';

import UserItem from './userItem';
import UserModal from './userModal';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {

        let items = []
        if (this.props.userReducer && this.props.userReducer.isFetchingUser == false) {
            const usersList = this.props.userReducer.list;
            Object.keys(usersList).map((idx) => items.push(<UserItem key={idx} idx={idx} user={usersList[idx]}/>))
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                        <ul className="nav nav-pills flex-column">
                            <li className="nav-item">
                              <a className="nav-link active" href="#">Users <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </nav>
                    <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
                        <h1>Users Dashboard</h1>
                        <div className="table-responsive">
                            <table className="table table-striped">
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
                            </table>
                        </div>

                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createUserModal">
                            Create User
                        </button>

                        <UserModal {...this.props}/>
                    </main>
                </div>
            </div>
        );
    }

}

export default Content;