import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
function Wish({text,wish,wishes,setWishes}) {
    function deleteHandler(){
        setWishes(wishes.filter(item => item.id !== wish.id))

    }
  return (
    <li className="list-group-item ">
      <div className="d-flex">
        <div className="p-2 flex-grow-1">{text}</div>
        <div>
          <button onClick={deleteHandler} className="btn btn-outline-secondary" type="button">
            <FontAwesomeIcon icon={solid("xmark")} />
          </button>
        </div>
      </div>
    </li>
  );
}
export default Wish;