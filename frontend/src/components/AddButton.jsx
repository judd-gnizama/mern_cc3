import { MdAdd } from "react-icons/md";
import Wrapper from "../assets/wrappers/AddButton";

const AddButton = ({ label, onClickFunc }) => {
  return (
    <Wrapper>
      <div className="btn-add" onClick={onClickFunc}>
        <MdAdd className="icon" />
        <p className="label">{label}</p>
      </div>
    </Wrapper>
  );
};

export default AddButton;
