const CheckBoxForm = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input
          type={"checkbox"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default CheckBoxForm;
