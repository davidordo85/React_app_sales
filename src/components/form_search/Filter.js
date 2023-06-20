import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import SelectCategories from '../shared/SelectCategories';

function Filter({ tags }) {
  const [sections, setSections] = React.useState([]);
  const [orderPrice, setOrderPrice] = React.useState(false);

  const handleChange = () => {
    setOrderPrice(!orderPrice);
    // Aquí puedes realizar la lógica para buscar los productos según la selección de orden
  };

  const handleCategories = selectedOptions => {
    setSections([].slice.call(selectedOptions).map(item => item.value));
  };

  const label = orderPrice
    ? 'Sort from highest to lowest'
    : 'Sort from lowest to highest';

  return (
    <Form>
      <div className="d-flex">
        <div className="input-group ">
          <div className="input-group-append">
            <Button variant="info" className="mr-1">
              <FaSearch />
            </Button>
          </div>
          <FormControl type="text" placeholder="Search" className="ml-2" />
        </div>
        <SelectCategories
          categories={tags}
          onChange={handleCategories}
          selectedCategories={sections}
        />
      </div>
      <Form.Check
        name="orderPrice"
        type="checkbox"
        label={label}
        variant="warning"
        onChange={handleChange}
        checked={orderPrice}
        id="custom-checkbox"
        className="form-switch"
      />
    </Form>
  );
}

export default Filter;
