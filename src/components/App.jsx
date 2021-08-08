import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import useLocalStorage from './hooks/hook';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contact', '');
  const [filter, setFilter] = useState('');

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = normalizedFilter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    : contacts;

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    setContacts(state => [contact, ...state]);
  };

  const handleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const onDeleteClick = e => {
    const id = e.target.dataset.id;
    const newContacts = contacts.filter(contact => contact.id !== id);

    setContacts(newContacts);
    setFilter('');
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>

      <ContactForm onSubmit={addContact} />

      {contacts.length > 0 && <h2 style={{ textAlign: 'center' }}>Contacts</h2>}

      {contacts.length > 0 && (
        <Filter onChange={handleFilterChange} value={filter} />
      )}

      <ContactList contacts={filteredContacts} onDeleteClick={onDeleteClick} />
    </>
  );
}
