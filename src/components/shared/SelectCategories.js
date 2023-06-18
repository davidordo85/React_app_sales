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
    <div style={{ width: '97.5%' }}>
      <Select
        onChange={onChange}
        value={selectCategories}
        options={options}
        isMulti
      />
    </div>
  );
}

export default SelectCategories;
