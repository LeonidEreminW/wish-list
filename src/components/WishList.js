import React from "react";
import Wish from "./Wish";
function WhishList({ wishes, setWishes }) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {wishes.map((wish) => (
          <Wish setWishes={setWishes} 
          wishes={wishes} 
          text={wish.text}
          wish={wish}
          key={wish.id} />
        ))}
      </ul>
    </div>
  );
}
export default WhishList;
