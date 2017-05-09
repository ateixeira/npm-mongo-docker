import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class UserItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td><Glyphicon glyph="remove-sign" /></td>
                <td>{this.props.idx}</td>
                <td>{this.props.user.username}</td>
                <td>{this.props.user.email}</td>
            </tr>
        );
    }

}

export default UserItem;