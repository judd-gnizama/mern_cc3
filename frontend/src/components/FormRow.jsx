const FormRow = ({ name, labelText, type, defaultValue }) => {
  return (
    <>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {(labelText || name).concat(":")}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="form-input"
          required
        />
      </div>
    </>
  );
};

export default FormRow;
