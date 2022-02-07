import React, { useEffect } from 'react';
import TodoForm from './TodoForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    markComplete,
    deleteTodo,
    getTodos,
} from '../store/actions/TodoActions';

const Todos = ({ todos, markComplete, deleteTodo, getTodos }) => {
    
    useEffect(() => {
        getTodos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <div>
            <div className='todo-list'>
                <TodoForm />
                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={todo.completed ? 'completed' : ''}
                        >
                            {todo.title}
                            <input
                                type='checkbox'
                                onChange={() => markComplete(todo.id)}
                                checked={todo.completed}
                            />
                            <button onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    getTodos: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    todos: state.myTodos.todos,
});

export default connect(mapStateToProps, { getTodos, markComplete, deleteTodo })(
    Todos,
);
