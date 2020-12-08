import { Component } from 'react';
import s from './ContactForm.module.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.setState({ name: ' ', number: ' ' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <br />
          <input
            className={s.input}
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            className={s.input}
            name="number"
            type="tel"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className={s.button} type="submit">
          {' '}
          Add to contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
