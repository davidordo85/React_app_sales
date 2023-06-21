import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { MdRefresh } from 'react-icons/md';
import SelectCategories from '../shared/SelectCategories';
import './Filter.css';

function Filter({ tags, onSubmit }) {
  // TODO: casos de filtrado del modelo del backend
  // name complete
  // price complete
  // rating
  // categories complete
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

  const { name, categories, price } = filter;

  return (
    <Form className="filter-container " onSubmit={handleSubmit}>
      <FormControl
        name="name"
        type="text"
        placeholder="Search product"
        value={name}
        onChange={handleChange}
        className="filter-item filter-input"
      />
      <SelectCategories
        name="categories"
        categories={tags}
        onChange={selectedOptions => handleChange(null, selectedOptions)}
        selectedCategories={categories}
        className="filter-item filter-select"
      />

      <Form.Check
        name="price"
        type="checkbox"
        label={label}
        variant="warning"
        onChange={handleChange}
        checked={price}
        id="custom-checkbox"
        className="form-switch filter-item"
      />
      <Button
        variant="info"
        type="submit"
        className="filter-item filter-button"
      >
        <FaSearch />
      </Button>

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
