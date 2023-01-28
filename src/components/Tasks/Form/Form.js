import React from 'react';
import uuid from 'react-uuid';
import './Form.scss';


class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      description: '',
      done: false,
      errorMessage: null,
    };
  }

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
  }

  handleStatusChange = (event) => {
    this.setState({ done: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.description === '') {
      this.setState({ errorMessage: 'Enter a description' })
    } else {
      const newTask = {
        id: uuid(),
        description: this.state.description,
        done: this.state.done,
      };

      this.props.addTask(newTask);

      this.setState({
        description: '',
        done: false,
        errorMessage: null,
      })
    }
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleSubmit}>
          {this.state.errorMessage && (
            <div className='error'>
              Invalid data: {this.state.errorMessage}
            </div>
          )}

          <div className='filed'>
            <label>Description: </label>
            <input
              className='formInput'
              type="text"
              maxLength={150}
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>

          <div className='filed'>
            <label>Status: </label>
            <select
              className='formInput'
              value={this.state.done}
              onChange={this.handleStatusChange}>
              <option value={false}>Open</option>
              <option value={true}>Completed</option>
            </select>
          </div>

          <button className='button-add' type='submit'>Add</button>
        </form>
      </div>
    )
  }
}

export default Form;

