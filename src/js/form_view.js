import React, { Component, PropTypes } from 'react';
import SimpleSerialForm from 'react-simple-serial-form';

export default class FormView extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  dataHandler(formData) {
    // console.log(formData);
    // console.log('what is that:', this);
    this.props.onAdd(formData);
  }

  render() {
    return (
      <div className="form-view">
        <h1>Add Something To Do</h1>
        <SimpleSerialForm onData={::this.dataHandler}>
          <div>
            <label>
              Title:
              <input type="text" name="title"/>
            </label>
          </div>
          <button>Save To Do Item</button>
        </SimpleSerialForm>
      </div>
    );
  }
}
