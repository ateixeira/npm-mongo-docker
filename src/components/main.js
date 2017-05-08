import React from 'react';

import Header from './header';
import Content from './content';
import LoginPage from './login';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Content {...this.props} />
            </div>

        );
    }
}

export default Main;