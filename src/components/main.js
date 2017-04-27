import React from 'react';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">MERN Docker</a>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Settings</a>
                            </li>
                        </ul>
                    </div>
                </nav>
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

            </div>

        );
    }

}

export default Main;