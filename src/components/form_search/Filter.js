import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import SelectCategories from '../shared/SelectCategories';
import './Filter.css';

function Filter({ tags, onSubmit }) {
  // TODO: casos de filtrado del modelo del backend
  // name
  // price
  // rating
  // categories
  // category
  // createdAt
  // companyName
  const initialFilterState = {
    name: '',
    price: false,
    categories: [],
  };
  const [filter, setFilter] = React.useState(initialFilterState);

  const handleChange = (event, selectedOptions) => {
    if (event && event.target) {
      const { name, value, checked } = event.target;
      const newFilter = {
        ...filter,
        [name]: value,
        price: checked,
      };
      setFilter(newFilter);
    } else if (selectedOptions) {
      const updatedCategories = Array.from(
        selectedOptions,
        option => option.value,
      );
      const newFilter = {
        ...filter,
        categories: updatedCategories,
      };
      setFilter(newFilter);
    }
  };

  const handleResetFilters = () => {
    setFilter(initialFilterState);
  };

  const label = filter.price
    ? 'Sort from highest to lowest'
    : 'Sort from lowest to highest';

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(filter);
  };

  return (
    <Form className="filter-container" onSubmit={handleSubmit}>
      <Button
        variant="info"
        type="submit"
        className="filter-item filter-button"
      >
        <FaSearch />
      </Button>
      <FormControl
        name="name"
        type="text"
        placeholder="Search"
        value={filter.name}
        onChange={handleChange}
        className="filter-item filter-input"
      />
      <SelectCategories
        name="categories"
        categories={tags}
        onChange={selectedOptions => handleChange(null, selectedOptions)}
        selectedCategories={filter.categories}
        className="filter-item filter-select"
      />

      <Form.Check
        name="price"
        type="checkbox"
        label={label}
        variant="warning"
        onChange={handleChange}
        checked={filter.price}
        id="custom-checkbox"
        className="form-switch filter-item"
      />

      <Button
        variant="link"
        onClick={handleResetFilters}
        className="reset-button"
        style={{ textDecoration: 'none' }}
      >
        <MdRefresh className="reset-icon" />
        Reset Filters
      </Button>
    </Form>
  );
}

export default Filter;
