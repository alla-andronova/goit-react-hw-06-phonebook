import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/actions/contacts';
import { deleteContact } from '../../redux/slices/contacts';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = normalizedFilter
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      )
    : contacts;

  const deleteItem = e => {
    const id = e.target.dataset.id;
    dispatch(deleteContact(id));
  };
  return (
    <ul className={s.list}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              data-id={id}
              type="button"
              onClick={deleteItem}
              className={s.btn}
            >
              &#10060;
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
