import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions/TodoActions';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title !== '') {
            const newTodo = {
                id: uuid(),
                title: title,
                complete: false,
            };
            addTodo(newTodo);
            setTitle('');
        }
    };

    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    onChange={handleChange}
                    value={title}
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {};

export default connect(mapStateToProps, { addTodo })(TodoForm);
