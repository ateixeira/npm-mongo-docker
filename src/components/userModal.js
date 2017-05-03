import React from 'react';


class UserModal extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit() {
        alert("CRIA USUARIO!!!!");
    }

    render() {
        return (
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleSubmit} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserModal;