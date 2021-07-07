import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, fetchDataFailure, fetchDataSuccess } from './fetchData';
import fetchData from './fetchData';

class App extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchdata();
  }
  render() {
    return data.map(data => {
      return data.id;
    });
  }
}

const mapStateToProps = state => ({
  fetchdata: data
});

const mapDispatchToProps = dispatch => ({
  fetchdata: () => dispatch(fetchData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
