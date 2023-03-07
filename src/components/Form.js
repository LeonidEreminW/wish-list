import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function Form({ inputText, setInputText, wishes, setWishes }) {
  function inputTextHandler(element) {
    setInputText(element.target.value);
  }
  function submitWishHandler(element) {
    element.preventDefault();
    setWishes([...wishes, { text: inputText, id: Math.random() }]);
    setInputText("");
  }
  return (
    <div className="input-group mb-3">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="form-control"
        placeholder="Some text"
      ></input>
      <button
        onClick={submitWishHandler}
        className="btn btn-outline-secondary"
        type="button"
      >
        <FontAwesomeIcon icon={solid("poo")} />
      </button>
    </div>
  );
}

export default Form;
