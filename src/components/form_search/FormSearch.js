import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function FormSearch() {
  return (
    <Form>
      <div className="input-group">
        <FormControl type="text" placeholder="Search" className="ml-2" />
        <div className="input-group-append">
          <Button variant="light" className="mr-1">
            <FaSearch />
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default FormSearch;
