import ContactForm from './InputName/InputName';
import ContactList from './ContacstList/ContactsList';
import { nanoid } from 'nanoid';
import React from 'react';
import Filter from './FilterContacts/FilterContacts';
import './App.module.css';

export class App extends React.Component {
  state = {
    contacts: [],
    filterC: '',
  };

  componentDidMount() {
    if (localStorage.getItem('Contacts')) {
      let localStorageState = JSON.parse(localStorage.getItem('Contacts'));
      this.setState({ contacts: localStorageState });
    }
  }

  addContact = (name, number) => {
    return this.setState({
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    });
  };
  addFilter = filter => {
    return this.setState({ filterC: filter });
  };

  filtredContacts = () => {
    const normalizeFilter = this.state.filterC.toLocaleLowerCase();

    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return filtredContacts;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  saveLocalStorege = () => {
    localStorage.setItem('Contacts', JSON.stringify(this.state.contacts));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      this.saveLocalStorege();
    }
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter filter={this.addFilter} />
        <ContactList
          contacts={this.filtredContacts()}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
