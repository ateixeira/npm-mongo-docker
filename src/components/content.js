import React from 'react';
import { fetchUsers } from '../actions/actionCreators';

import UserItem from './userItem';
import UserModal from './userModal';

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                {React.cloneElement({...this.props}.children, {...this.props})}
            </div>
        );
    }

}

export default Content;