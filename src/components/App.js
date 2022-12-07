import React from 'react';
import Todo from './Todo';
import Count from './Count';
import './App.css';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            todos: [],
        };
    }

    render() {
        const { name, todos } = this.state;
        const doneCount = todos.filter((todo) => todo.done).length;
        return (
            <div id='container'>
                <div id='header'>
                    <h1>To do</h1>
                    <Count all={todos.length} done={doneCount} />
                    <input
                        value={name}
                        placeholder='Write not empty Todo...'
                        onChange={this.handleSetName}
                    />
                    <button onClick={this.handleAddTodo} disabled={name.trim() === ''}>
                        Add new todo
                    </button>
                </div>
                {todos.map((todo) => (
                    <div id='todosiki'>
                        <Todo
                            name={todo.name}
                            done={todo.done}
                            onDone={this.handleSetDone}
                            onRemove={this.handleRemoveTodo}
                        />
                    </div>
                ))}
            </div>
        );
    }

    handleSetName = (e) => this.setState({ name: e.target.value });

    handleSetDone = (done, name) => {
        this.setState({
            todos: this.state.todos.map((todo) => (todo.name === name ? { name, done } : todo)),
        });
    };

    handleAddTodo = () => {
        const { todos, name } = this.state;
        if (!name.trim()) {
            alert('do not be lazy, try again');
            return;
        }
        this.setState({
            name: '',
            todos: todos.concat([{ name, done: false }]),
        });
    };

    handleRemoveTodo = (name) =>
        this.setState({
            todos: this.state.todos.filter((todo) => todo.name !== name),
        });
}
