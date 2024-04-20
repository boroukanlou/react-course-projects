import { useEffect } from "react";

function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const seconds = Math.floor(secondRemaining % 60);
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "thick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"} {seconds}
    </div>
  );
}

export default Timer;
