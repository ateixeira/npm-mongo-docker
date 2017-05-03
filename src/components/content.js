import React from 'react';
import { fetchUsersIfNeeded } from '../actions/actionCreators';

import UserItem from './userItem';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsersIfNeeded()
    }

    render() {

        let items = []
        if (this.props.usersList.users && this.props.usersList.users.isFetching == false) {
            const usersList = this.props.usersList.users.items;
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

                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Create User
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">User</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                          <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                            <div className="col-lg-12 well">
                                                <div className="row">
                                                    <div className="col-sm-6 form-group">
                                                        <label>First Name</label>
                                                        <input type="text" placeholder="Enter First Name Here.." className="form-control" />
                                                    </div>
                                                    <div className="col-sm-6 form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" placeholder="Enter Last Name Here.." className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input type="text" placeholder="Enter Email Address Here.." className="form-control" />
                                                </div>  
                                                <div className="form-group">
                                                    <label>Website</label>
                                                    <input type="text" placeholder="Enter Website Name Here.." className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

}

export default Content;