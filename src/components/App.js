
import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import './../styles/App.css';

const App = ({ count, increment, decrement }) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  count: state.count
});

// Map Redux actions to component props
const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
