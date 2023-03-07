import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
function Wish({ text, wish, wishes, setWishes, currentWish, setCurrentWish }) {
  function deleteHandler() {
    setWishes(wishes.filter((item) => item.id !== wish.id));
  }
  function dragStartHandler(element, wish) {
    setCurrentWish(wish);
  }
  function dragEnterHandler(element) {
    element.target.style.background = "grey";
  }
  function dragLeaveHandler(element) {
    element.target.style = "";
  }
  function dragEndHandler(element) {
    element.target.style = "";
  }
  function dragOverHandler(element) {
    element.preventDefault();
  }
  function dropHandler(element, wish) {
    element.target.style = "";
    element.preventDefault();
    setWishes(
      wishes.map((c) => {
        if (c.id === wish.id) {
          return { ...c, order: currentWish.order };
        }
        if (c.id === currentWish.id) {
          return { ...c, order: wish.order };
        }
        return c;
      })
    );
  }

  return (
    <li
      className="list-group-item"
      draggable={true}
      onDragStart={(element) => dragStartHandler(element, wish)}
      onDragEnter={(element) => dragEnterHandler(element)}
      onDragLeave={(element) => dragLeaveHandler(element)}
      onDragEnd={(element) => dragEndHandler(element)}
      onDragOver={(element) => dragOverHandler(element)}
      onDrop={(element) => dropHandler(element, wish)}
    >
      <div className="d-flex">
        <div className="p-2 flex-grow-1 noPointerEvents">{text}</div>
        <div>
          <button
            onClick={deleteHandler}
            className="btn btn-outline-secondary"
            type="button"
          >
            <FontAwesomeIcon icon={solid("xmark")} />
          </button>
        </div>
      </div>
    </li>
  );
}
export default Wish;
