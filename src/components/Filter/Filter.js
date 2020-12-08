import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Find contact by name
    <br />
    <input type="text" name="name" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
