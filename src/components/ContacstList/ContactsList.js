import PropsTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactsListItem contact={contact} deleteContact={deleteContact} />
        );
      })}
    </ul>
  );
};

ContactList.propsTypes = {
  contacts: PropsTypes.arrayOf([PropsTypes.string.isRequired]).isRequired,
  deleteContact: PropsTypes.func.isRequired,
};
export default ContactList;
