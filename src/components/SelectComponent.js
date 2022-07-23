const SelectComponent = ({ options }) => (
  <select className="shop__select">
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);
export default SelectComponent;
