import { Section } from './App.styled';
import { Container } from 'components/Container/Container';
import { Title } from 'components/Title/Title';
import { ContactsForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Section>
      <Container color="blue">
        <ContactsForm>
          <Title title="Phonebook" />
        </ContactsForm>
      </Container>
      <Container color="yellow">
        <Title title="Contact" />
        {contacts.length > 0 ? (
          <ContactList>
            <ContactFilter />
          </ContactList>
        ) : (
          'Contact list is empty.'
        )}
      </Container>
    </Section>
  );
};
