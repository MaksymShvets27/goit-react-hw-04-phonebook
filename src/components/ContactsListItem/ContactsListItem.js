import css from './ContactsListItem.module.css';
import PropsTypes from 'prop-types';

const ContactsListItem = ({ contact, deleteContact }) => {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button
        className={css.deleteButton}
        type="button"
        onClick={() => {
          deleteContact(contact.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propsTypes = {
  contact: PropsTypes.shape({
    id: PropsTypes.number.isRequired,
    name: PropsTypes.string.isRequired,
    number: PropsTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropsTypes.func.isRequired,
};
export default ContactsListItem;
