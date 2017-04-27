import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';
import Main from '../components/main';

function mapStateToProps(state, ownProps) {
    const { foo, isFetching } = state;

    return {
	    foo,
	    isFetching
  	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);