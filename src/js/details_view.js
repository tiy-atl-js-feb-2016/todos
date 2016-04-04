import React, { Component, PropTypes } from 'react';

export default class DetailsView extends Component {
  static propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string.isRequired,
      due: PropTypes.instanceOf(Date).isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired,

    onBack: PropTypes.func.isRequired
  }

  render() {
    let { item, onBack } = this.props;
    return (
      <div className="details-view">
        <h1>{item.title}</h1>
        <div>{item.due.toString()}</div>
        <div>{item.completed.toString()}</div>
        <div>
          <button onClick={onBack}>Back</button>
        </div>
      </div>
    )
  }
}
