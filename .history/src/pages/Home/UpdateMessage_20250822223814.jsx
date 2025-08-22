import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const UpdateMessage = () => {
  return (
    <div className="w-full py-6 bg-[#013c36]">
      <Flicking
        bound={true}
        bounce={0}
        align="center"
        circular={false}
        className="w-full"
      >
        <div className="flicking-panel w-64 h-40 bg-orange-500 text-white flex items-center justify-center rounded-lg shadow-lg mx-2">
          1
        </div>
        <div className="flicking-panel w-64 h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg mx-2">
          2
        </div>
        <div className="flicking-panel w-64 h-40 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg mx-2">
          3
        </div>
        <div className="flicking-panel w-64 h-40 bg-purple-500 text-white flex items-center justify-center rounded-lg shadow-lg mx-2">
          4
        </div>
      </Flicking>
    </div>
  );
};

export default UpdateMessage;
