import React from "react";
import Wish from "./Wish";
function WhishList({ wishes, setWishes,currentWish,setCurrentWish }) {
  function sortWishesByOrder(a,b){
    if (a.order>b.order){
      return 1
    }else{
      return -1
    }
  }
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {wishes.sort(sortWishesByOrder).map((wish) => (
          <Wish setWishes={setWishes} 
          wishes={wishes} 
          text={wish.text}
          wish={wish}
          key={wish.id}
          currentWish={currentWish}
          setCurrentWish={setCurrentWish} />
        ))}
      </ul>
    </div>
  );
}
export default WhishList;
