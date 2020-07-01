import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "./styles.css";

function Card(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <animated.div
      className="relative w-32 h-32 cursor-pointer"
      onClick={(event) => {
        event.stopPropagation();
        set((state) => !state);
      }}
      {...props}
    >
      <animated.div
        className="absolute inset-0  bg-gray-900 rounded-md"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        <h1 className="text-cool-gray-50 text-center mt-10">title</h1>
      </animated.div>
      <animated.div
        className="absolute inset-0  bg-red-900 rounded-md"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        <h1 className="text-cool-gray-50 text-center mt-10">content</h1>
      </animated.div>
    </animated.div>
  );
}

export default Card;
