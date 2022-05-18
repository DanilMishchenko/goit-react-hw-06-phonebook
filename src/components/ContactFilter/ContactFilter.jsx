import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import {
  FilterContainer,
  DescriptionFilter,
  InputFilter,
} from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  return (
    <FilterContainer>
      <DescriptionFilter>Find contacts by name</DescriptionFilter>
      <InputFilter
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
      ></InputFilter>
    </FilterContainer>
  );
};
