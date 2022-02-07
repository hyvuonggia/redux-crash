import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Navbar = ({ todos }) => {
    return (
        <div className='navbar'>
            <h1>My Redux Todos App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todos: {todos.length}</li>
            </ul>
        </div>
    );
};

Navbar.propTypes = {
    todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        todos: state.myTodos.todos,
    };
};

export default connect(mapStateToProps, {})(Navbar);
