const SelectSortMode = ({ updateSortMode }) => {
  return (
    <select onChange={(e) => updateSortMode(e.target.value)}>
      <option value={0}>Featured</option>
      <option value={1}>Price: Low to High</option>
      <option value={2}>Price: High to Low</option>
      <option value={3}>Rate: Low to High</option>
      <option value={4}>Rate: High to Low</option>
    </select>
  );
};

export default SelectSortMode;
