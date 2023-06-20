import React from 'react';
import Select from 'react-select';

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
    <div>
      <Select
        onChange={onChange}
        value={selectCategories}
        options={options}
        isMulti
        placeholder={'All Categories'}
      />
    </div>
  );
}

export default SelectCategories;
