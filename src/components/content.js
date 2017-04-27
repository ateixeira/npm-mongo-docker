import React from 'react';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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
                                    <tr>
                                        <td>1</td>
                                        <td>label</td>
                                        <td>andre.teixeira@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>clarinha</td>
                                        <td>mariaclara@linda.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

}

export default Content;