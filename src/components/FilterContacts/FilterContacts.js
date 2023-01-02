import css from './FilterContacts.module.css';
import PropsTypes from 'prop-types';
const Filter = ({ filter }) => {
  return (
    <>
      <p>Find contact by Name</p>
      <input
        className={css.inputFilter}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={event => {
          filter(event.target.value);
        }}
      ></input>
    </>
  );
};
Filter.propsTypes = {
  filter: PropsTypes.func.isRequired,
};
export default Filter;
