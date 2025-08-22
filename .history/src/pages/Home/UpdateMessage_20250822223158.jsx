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

        {/* Panel 2 (Nested Horizontal) */}
        <div className="flicking-panel w-64 h-40 bg-gray-700 rounded-lg flex items-center justify-center">
          <Flicking bound={true} bounce={0} nested={true}>
            <div className="flicking-panel w-48 h-32 bg-purple-500 text-white flex items-center justify-center rounded-lg">
              2.1
            </div>
            <div className="flicking-panel w-48 h-32 bg-blue-500 text-white flex items-center justify-center rounded-lg">
              2.2
            </div>
            <div className="flicking-panel w-48 h-32 bg-green-500 text-white flex items-center justify-center rounded-lg">
              2.3
            </div>
          </Flicking>
        </div>

        {/* Panel 3 (Nested Vertical) */}
        <div className="flicking-panel w-64 h-40 bg-gray-800 rounded-lg flex items-center justify-center">
          <Flicking bound={true} bounce={0} horizontal={false}>
            <div className="flicking-panel w-48 h-32 bg-pink-500 text-white flex items-center justify-center rounded-lg">
              3.1
            </div>
            <div className="flicking-panel w-48 h-32 bg-red-500 text-white flex items-center justify-center rounded-lg">
              3.2
            </div>
            <div className="flicking-panel w-48 h-32 bg-yellow-500 text-white flex items-center justify-center rounded-lg">
              3.3
            </div>
          </Flicking>
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
