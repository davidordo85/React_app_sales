import React from 'react';
import Select from 'react-select';

function SelectCategories({ categories, onChange, selectedCategories }) {
  const options = [];
  categories.map(category => {
    return options.push({ value: category, label: category });
  });

  const selectCategory = {
    value: selectedCategories,
    label: selectedCategories,
  };

  return (
    <Select
      className=""
      onChange={onChange}
      value={selectCategory}
      options={options}
    />
  );
}

export default SelectCategories;
