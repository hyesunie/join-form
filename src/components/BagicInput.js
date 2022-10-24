import { useState } from "react";

function BagicInput({
  name,
  type,
  checkConditions,
  correctMessage,
  setJoinState,
}) {
  const [isFirstChange, setFirstChange] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const [warningMessage, setWarning] = useState("");

  const onChange = (e) => {
    setFirstChange(true);
    const checkedString = checkConditions();

    if (checkedString !== "pass") {
      setIsCheck(false);
      setWarning(checkedString);
      return;
    }

    setIsCheck(true);
  };

  return (
    <>
      <label className="bagic-input__label" htmlFor={name}>
        {name}
      </label>
      <input
        className="bagic-input__input"
        type={type}
        id={name}
        onChange={onChange}
      ></input>
      {!isFirstChange ? (
        ""
      ) : isCheck ? (
        <div>{correctMessage}</div>
      ) : (
        <div>{warningMessage}</div>
      )}
    </>
  );
}

export default BagicInput;
