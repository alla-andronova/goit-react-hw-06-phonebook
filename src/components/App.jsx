import { useSelector } from 'react-redux';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';

export default function App() {
  const contacts = useSelector(state => state.contacts);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2 style={{ textAlign: 'center' }}>Contacts</h2>}

      {contacts.length > 0 && <Filter />}

      <ContactList />
    </>
  );
}
