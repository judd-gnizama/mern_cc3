import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const FormRow = ({
  name,
  labelText,
  type,
  defaultValue,
  show,
  setShow,
  isPassword = false,
}) => {
  return (
    <>
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {(labelText || name).concat(":")}
        </label>
        <input
          type={isPassword ? (show ? "text" : "password") : type}
          id={name}
          name={name}
          defaultValue={defaultValue}
          className="form-input"
          required
        />
        {isPassword && (
          <button
            type="button"
            className="btn-visible"
            onClick={() => setShow(!show)}
          >
            {show ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        )}
      </div>
    </>
  );
};

export default FormRow;
