import React from 'react'
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";

const UpdateMessage = () => {
   return <>
      <Flicking>
        <div className="flicking-panel">1</div>
        <div className="flicking-panel nested-wide">
          <Flicking bounce="0" bound={true} nested={true}>
            <div className="flicking-panel">2.1</div>
            <div className="flicking-panel">2.2</div>
            <div className="flicking-panel">2.3</div>
          </Flicking>
        </div>
        <div className="flicking-panel nested-wide vertical">
          <Flicking bounce="0" bound={true} horizontal={false}>
            <div className="flicking-panel">3.1</div>
            <div className="flicking-panel">3.2</div>
            <div className="flicking-panel">3.3</div>
          </Flicking>
        </div>
        <div className="flicking-panel">4</div>
      </Flicking>
    </>
}

export default UpdateMessage;