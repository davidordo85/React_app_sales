import React from 'react';
import Select from 'react-select';
import './SelectCategories.css';

function SelectCategories({ categories, onChange, selectedCategories }) {
  const options = categories.map(category => ({
    value: category,
    label: category,
  }));

  const selectCategories = selectedCategories.map(category => ({
    value: category,
    label: category,
  }));

  return (
    <Select
      onChange={onChange}
      value={selectCategories}
      options={options}
      isMulti
      placeholder={'All Categories'}
      className="custom-select"
    />
  );
}

export default SelectCategories;
