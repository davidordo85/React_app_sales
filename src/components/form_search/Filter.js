import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import SelectCategories from '../shared/SelectCategories';
import './Filter.css'; // Archivo CSS personalizado para el componente Filter

function Filter({ tags }) {
  const [sections, setSections] = React.useState([]);
  const [orderPrice, setOrderPrice] = React.useState(false);

  const handleChange = () => {
    setOrderPrice(prevOrderPrice => !prevOrderPrice);
    // Aquí puedes realizar la lógica para buscar los productos según la selección de orden
  };

  const handleCategories = selectedOptions => {
    setSections([].slice.call(selectedOptions).map(item => item.value));
  };

  const label = orderPrice
    ? 'Sort from highest to lowest'
    : 'Sort from lowest to highest';

  return (
    <Form className="filter-container">
      <Button variant="info" className="filter-item filter-button">
        <FaSearch />
      </Button>
      <FormControl
        type="text"
        placeholder="Search"
        className="filter-item filter-input"
      />
      <SelectCategories
        categories={tags}
        onChange={handleCategories}
        selectedCategories={sections}
        className="filter-item filter-select"
      />
      <Form.Check
        name="orderPrice"
        type="checkbox"
        label={label}
        variant="warning"
        onChange={handleChange}
        checked={orderPrice}
        id="custom-checkbox"
        className="form-switch filter-item"
      />
    </Form>
  );
}

export default Filter;
