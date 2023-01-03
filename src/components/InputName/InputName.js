import { useState } from 'react';
import css from './InputName.module.css';
import PropsTypes from 'prop-types';

const ContactForm = ({ addContact, contacts }) => {
  const [currentContactName, setCurrentContactName] = useState('');
  const [currentContactNumber, setCurrentContactNumber] = useState('');

  const onAddContactSubmit = event => {
    event.preventDefault();
    let check = true;
    contacts.forEach(contact => {
      if (contact.name === currentContactName) {
        alert(`${contact.name} is already in contacts!`);
        check = false;
      }
    });
    if (check === true) {
      addContact(currentContactName, currentContactNumber);
      setCurrentContactName('');
      setCurrentContactNumber('');
    }
  };

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
          value={currentContactName}
          onChange={event => setCurrentContactName(event.target.value)}
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
          value={currentContactNumber}
          onChange={event => setCurrentContactNumber(event.target.value)}
        />
      </label>
      <button
        className={css.btnAddContact}
        type="submit"
        onClick={onAddContactSubmit}
      >
        Add Contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  addContact: PropsTypes.func.isRequired,
  contacts: PropsTypes.array.isRequired,
};
export default ContactForm;
