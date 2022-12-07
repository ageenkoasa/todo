import React from 'react';

export default class Count extends React.Component {
    render() {
        const { all, done } = this.props;
        return (
            <div className='count'>
                <span>All: {all}</span>
                <span>Done: {done}</span>
                <span>Left: {all - done}</span>
            </div>
        );
    }
}
