import React, { Component } from 'react';

export default class NoteEditor extends Component {
  state = {
    text: '',
    rate: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text, this.state.rate);
  };

  handleChangeArea = ({ target: { value } }) => {
    this.setState({
      text: value,
    });
  };

  handleChangeSelect = ({ target: { value } }) => {
    this.setState({
      text: this.state.text,
      rate: value,
    });
  };

  render() {
    const { rate } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChangeArea} placeholder="Your comment" />
        <label>
          Chose rate
          <select name="rate" value={rate} onChange={this.handleChangeSelect}>
            <option value="" disabled>
              ...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </label>
        <input type="submit" value="Add" />
      </form>
    );
  }
}
