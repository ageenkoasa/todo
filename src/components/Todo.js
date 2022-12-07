import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHover: false,
        };
    }

    render() {
        const { done, name } = this.props;
        return (
            <div
                id='todo'
                className={`${done ? 'done' : ''}`}
                onMouseEnter={this.handleDeleteButtonOn(true)}
                onMouseLeave={this.handleDeleteButtonOn(false)}
            >
                <input id='checkbox' type='checkbox' checked={done} onChange={this.handleCheck} />
                <span>{name}</span>
                {this.state.isHover && (
                    <button onClick={this.handleRemove} id='delete'>
                        Delete
                    </button>
                )}
            </div>
        );
    }

    handleCheck = (e) => {
        const done = e.target.checked;
        this.props.onDone(done, this.props.name);
    };

    handleDeleteButtonOn = (isHover) => () => this.setState({ isHover });

    handleRemove = () => this.props.onRemove(this.props.name);
}
