import React from 'react';

import NavBar from './navbar';
import Content from './content';
import LoginPage from './login';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <LoginPage/>
            </div>

        );
    }

}

export default Main;