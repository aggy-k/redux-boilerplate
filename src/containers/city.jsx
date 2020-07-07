import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import actions
import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    // need to bind to actions
    console.log(this.props.city)
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <div className="list-group-item" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

export default connect (null, mapDispatchToProps)(City);