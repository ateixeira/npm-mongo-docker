import React from 'react';
import { insertUser } from '../actions/actionCreators';

class UserModal extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit() {
        const name = document.getElementById("name").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const website = document.getElementById("website").value;

        let new_user = {};
            new_user.name = name;
            new_user.lastName = lastName;
            new_user.email = email;
            new_user.username = email.substr(0, email.indexOf('@'));
            new_user.password = password;
            new_user.website = website;

        this.props.insertUser(new_user);
    }

    render() {
        return (
            <div className="modal fade" id="createUserModal" tabIndex="-1" role="dialog" aria-labelledby="createUserModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createUserModalLabel">Create User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="sendmail" data-async  method="post" role="form" className="form-horizontal">

                                <div className="container">
                                    <div className="col-lg-12 well">
                                        <div className="row">
                                            <div className="col-sm-6 form-group">
                                                <label>First Name</label>
                                                <input type="text" id="name" placeholder="Enter First Name here.." className="form-control" />
                                            </div>
                                            <div className="col-sm-6 form-group">
                                                <label>Last Name</label>
                                                <input type="text" id="lastName" placeholder="Enter Last Name here.." className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="text" id="email" placeholder="Enter Email Address here.." className="form-control" />
                                        </div>  
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" id="password" placeholder="Enter Password here.." className="form-control" />
                                        </div>  
                                        <div className="form-group">
                                            <label>Website</label>
                                            <input type="text" id="website" placeholder="Enter Website Name here.." className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserModal;