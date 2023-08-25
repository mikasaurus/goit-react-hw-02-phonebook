import { PropTypes } from 'prop-types';

export const FilterContact = ({ filter, inputChange }) => {
  return (
    <label>
      Find contact by name
      <input type="text" name="filter" value={filter} onChange={inputChange} />
    </label>
  );
};

FilterContact.propTypes = {
  filter: PropTypes.string,
  inputChange: PropTypes.func,
};
