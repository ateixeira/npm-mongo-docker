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
                <NavBar/>
                <Content {...this.props} />
            </div>

        );
    }

}

export default Main;