import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';
import Main from '../components/main';

function mapStateToProps(state, ownProps) {
    const { isFetching, userReducer } = state;

    return {
	    isFetching,
	    userReducer
  	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);