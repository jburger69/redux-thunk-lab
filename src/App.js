import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from './CatList';
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.catPics) // log will fire every time App renders
    return (
      <div className="App">
        <h1>CatBook</h1>
        {(this.props.loading) ? <h4>loading pics</h4> : <h4>pics loaded!</h4>}
        <CatList catPics={this.props.catPics}/>
        {/* missing component */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App) 

