import React, { useState, Fragment } from "react";
import { animated, useSpring } from "react-spring";
import "./styles.css";

function AddCard(props) {
  return (
    <div
      className="grid content-center cursor-pointer h-32 bg-white rounded-md shadow-solid"
      onClick={() => {
        if (props.content.children !== undefined) {
          props.callback(props.content.children);
        }
      }}
    >
      <span className="font-bold text-center">{props.content.name}</span>
    </div>
  );
}

function FlipCard(props) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <animated.div
      className="relative cursor-pointer max-w-full max-h-full h-32"
      onClick={(event) => {
        event.stopPropagation();
        set((state) => !state);
      }}
      // {...props}
    >
      <animated.div
        className="absolute inset-0  bg-gray-900 rounded-md"
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      >
        {/* <h1 className="text-cool-gray-50 text-center text-xl mt-10">title</h1> */}
      </animated.div>
      <animated.div
        className="absolute inset-0  bg-red-900 rounded-md"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(180deg)`),
        }}
      >
        {/* <h1 className="text-cool-gray-50 text-center  mt-10">content</h1> */}
      </animated.div>
    </animated.div>
  );
}

function RawCard(props) {
  // const [open, setOpen] = useState(false);

  return (
    // <div className="cursor-pointer max-w-full max-h-full w-32 h-32  p-5 bg-white rounded-md shadow-solid">
    <div
      className="grid content-center cursor-pointer h-32 bg-white rounded-md border border-gray-700"
      onClick={() => {
        // setOpen(!open);
        if (props.content.children !== undefined) {
          props.callback(props.content.children);
        }
      }}
    >
      {/* {open ? (
        <div className="grid grid-cols-4 gap-7 p-5 mt-20 rounded-md cursor-pointer shadow-outline-red">
          {data.map((item) => (
            <RawCard content={item.name} />
          ))}
        </div>
      ) : ( */}
      <span className="font-light text-center">{props.content.name}</span>
      {/* )} */}
    </div>
  );
}

function RawCardList({ cards }) {
  const [data, setData] = useState(cards);
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 grid grid-cols-4 gap-7 p-5 mt-20">
      {data.map((item) =>
        item.type === "child" ? (
          <FlipCard />
        ) : (
          <RawCard content={item} callback={setData} />
        )
      )}
    </div>
  );
}

export { FlipCard, RawCard, RawCardList };
