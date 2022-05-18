import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  getContacts,
  filterValue,
} from 'redux/contacts/contactsSlice';
import { List, Item, Information, DeleteButton } from './ContactList.styled';

export const ContactList = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(filterValue);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {children}
      <List>
        {getFilteredContacts().map(({ id, name, number }) => (
          <Item key={id}>
            <Information>
              {name}: {number}
            </Information>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteButton>
          </Item>
        ))}
      </List>
    </>
  );
};
