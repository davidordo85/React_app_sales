import React from 'react';
import { Form } from 'react-bootstrap';
import FormField from '../../../shared/FormField';

function CreateProductForm({ onSubmit }) {
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
        // Si es un campo de imágenes
        newNewProduct = {
          ...oldNewProduct,
          [name]: files,
        };
      } else if (name === 'categories') {
        // Si es el campo de categorías
        const categoriesArray = value
          .split(',')
          .map(category => category.trim())
          .filter(category => category !== '');

        newNewProduct = {
          ...oldNewProduct,
          categories:
            categoriesArray.length > 1
              ? categoriesArray
              : categoriesArray[0] || [],
        };
      } else {
        // Si es un campo de entrada regular
        newNewProduct = {
          ...oldNewProduct,
          [name]: value,
        };
      }

      return newNewProduct;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(newProduct);
  };

  const { name, price, quantity, description, categories } = newProduct;
  console.log(newProduct);
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
    </Form>
  );
}

export default CreateProductForm;
