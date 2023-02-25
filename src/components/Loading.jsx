import React, { useEffect, useState } from "react";

function Loading() {
  let [active, setActive] = useState(false);
  let time = ["3", "2", "1", "0"];

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 4000);
  }, []);

  return (
    <section className={`loading ${active ? "loading__active" : ""}`}>
      <div className="loading__box">
        <div className="loading__face loading__face-one">
          <div className="loading__circle"></div>
        </div>
        <div className="loading__face loading__face-two">
          <div className="loading__circle"></div>
        </div>
      </div>

      <ul className="loading__list">
        {time.map((post, key) => {
          return (
            <li key={key + 149} className="loading__item">
              {post}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Loading;
