import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const UpdateMessage = () => {
  return (
    <div className="w-full h-[200px]">
      <Flicking bound={true} bounce={0}>
        {/* Panel 1 */}
        <div className="flicking-panel flex items-center justify-center w-64 h-40 bg-orange-400 text-white rounded-lg shadow-lg">
          1
        </div>

        {/* Panel 4 */}
        <div className="flicking-panel flex items-center justify-center w-64 h-40 bg-indigo-500 text-white rounded-lg shadow-lg">
          4
        </div>
      </Flicking>
    </div>
  );
};

export default UpdateMessage;
