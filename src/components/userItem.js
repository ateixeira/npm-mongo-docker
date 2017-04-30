import React from 'react';

class UserItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.idx}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
            </tr>
        );
    }

}

export default UserItem;