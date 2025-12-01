const InputForm = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="mt-4">
      <div className="mb-2">
        <label>
          {label}
          {required ? <span className="text-danger ms-1 xs">*</span> : ""}
        </label>
      </div>
      <div>
        <input
          type={"text"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputForm;
