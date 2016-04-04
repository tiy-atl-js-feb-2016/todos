import React, { Component, PropTypes } from 'react';

export default class ListView extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      due: PropTypes.instanceOf(Date).isRequired,
      completed: PropTypes.bool.isRequired
    })).isRequired,

    onSelect: PropTypes.func.isRequired,

    onNew: PropTypes.func.isRequired
  }

  render() {
    let { items, onSelect, onNew } = this.props;
    return (
      <div className="list-view">
        <h1>Things To Do</h1>
        <button onClick={onNew}>Add New Thing</button>
        <ul>
          {items.map(item => <li key={item.title} onClick={() => onSelect(item)}>{item.title}</li>)}
        </ul>
      </div>
    );
  }

}
