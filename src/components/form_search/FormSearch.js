import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import SelectCategories from '../shared/SelectCategories';

function FormSearch({ tags }) {
  const [sections, setSections] = React.useState([]);

  const handleCategories = selectedOptions => {
    setSections([].slice.call(selectedOptions).map(item => item.value));
  };
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
    </Form>
  );
}

export default FormSearch;
