import ContactForm from './InputName/InputName';
import ContactList from './ContacstList/ContactsList';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Filter from './FilterContacts/FilterContacts';
import './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (localStorage.getItem('Contacts')) {
      let localStorageState = JSON.parse(localStorage.getItem('Contacts'));
      setContacts(localStorageState ?? []);
    }
  }, []);

  const addContact = (name, number) => {
    return setContacts([
      ...contacts,
      { id: nanoid(), name: name, number: number },
    ]);
  };

  const addFilter = filter => {
    return setFilter(filter);
  };

  const filtredContacts = () => {
    const normalizeFilter = filter.toLocaleLowerCase();
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );
    return filtredContacts;
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={addFilter} />
      <ContactList
        contacts={filtredContacts()}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};
