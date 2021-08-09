import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// import { addContact } from '../../redux/actions/contacts';
import { addContact } from '../../redux/slices/contacts';

import s from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName(state => '');
    setNumber(state => '');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number, id: uuidv4() }));

    reset();
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(state => value);
        break;
      case 'number':
        setNumber(state => value);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            name="number"
            value={number}
            onChange={handleChange}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    </>
  );
}
