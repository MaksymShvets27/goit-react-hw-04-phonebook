import React from 'react';
import css from './InputName.module.css';
import PropsTypes from 'prop-types';
class ContactForm extends React.Component {
  static propTypes = {
    addContact: PropsTypes.func.isRequired,
    contacts: PropsTypes.array.isRequired,
  };

  state = {
    currentContactName: '',
    currentContactNumber: '',
  };

  onAddContactSubmit = event => {
    event.preventDefault();
    let check = true;
    this.props.contacts.forEach(contact => {
      if (contact.name === this.state.currentContactName) {
        alert(`${contact.name} is already in contacts!`);
        check = false;
      }
    });
    if (check === true) {
      this.props.addContact(
        this.state.currentContactName,
        this.state.currentContactNumber
      );
      this.setState({ currentContactName: '', currentContactNumber: '' });
    }
  };
  render() {
    return (
      <form className={css.formAddContact}>
        <h3>New Contact</h3>

        <label className={css.labelAddContact}>
          <p>Name</p>
          <input
            className={css.inputAddName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.currentContactName}
            onChange={event =>
              this.setState({ currentContactName: event.target.value })
            }
          />
        </label>
        <label className={css.labelAddContact}>
          <p>Number</p>
          <input
            className="inputAddNumber"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.currentContactNumber}
            onChange={event =>
              this.setState({ currentContactNumber: event.target.value })
            }
          />
        </label>
        <button
          className={css.btnAddContact}
          type="submit"
          onClick={this.onAddContactSubmit}
        >
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
