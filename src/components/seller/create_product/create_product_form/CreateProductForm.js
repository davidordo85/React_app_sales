import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FormField, SelectCategories } from '../../../shared';
import { FaFolder } from 'react-icons/fa';

function CreateProductForm({ onSubmit, tags }) {
  const [categories, setCategories] = React.useState([]);
  const [newProduct, setNewProduct] = React.useState({
    name: '',
    price: 0.1,
    quantity: 1,
    description: '',
    images: [],
    categories: [],
  });

  const handleChange = event => {
    const { name, value, type, files } = event.target;

    setNewProduct(oldNewProduct => {
      let newNewProduct;

      if (type === 'file') {
        const fileList = Array.from(files);
        newNewProduct = {
          ...oldNewProduct,
          [name]: fileList,
        };
      } else {
        newNewProduct = {
          ...oldNewProduct,
          [name]: value,
        };
      }

      return newNewProduct;
    });
  };

  const handleCategories = selectedOptions => {
    setCategories([].slice.call(selectedOptions).map(item => item.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const newProductData = {
      ...newProduct,
      categories: categories,
    };
    onSubmit(newProductData);
  };

  const { name, price, quantity, description } = newProduct;
  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        type="text"
        name="name"
        label="Name"
        value={name}
        onChange={handleChange}
        required
        minLength={2}
        maxLength={100}
      />
      <FormField
        type="number"
        name="price"
        label="Price"
        step="0.01"
        value={price}
        onChange={handleChange}
        required
        min={0.1}
        max={10000}
      />
      <FormField
        type="number"
        name="quantity"
        label="Quantity"
        min="1"
        step="1"
        value={quantity}
        onChange={handleChange}
        required
      />
      <FormField
        as="textarea"
        name="description"
        label="Description"
        value={description}
        onChange={handleChange}
        maxLength={500}
        required
      />
      <FormField
        type="file"
        name="images"
        label="Images"
        multiple
        onChange={handleChange}
        required
      />
      <InputGroup>
        <InputGroup.Text>
          <FaFolder />
        </InputGroup.Text>
        <SelectCategories
          categories={tags}
          onChange={handleCategories}
          selectedCategories={categories}
        />
      </InputGroup>
      <div className="d-flex justify-content-center m-2">
        <Button className="w-100" variant="warning" type="submit">
          Create product
        </Button>
      </div>
    </Form>
  );
}

export default CreateProductForm;
