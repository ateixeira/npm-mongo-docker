import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreators';
import Main from '../components/main';

function mapStateToProps(state, ownProps) {
    const { foo } = state;

    return {
	    foo
  	}
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Main);