import React, {Component} from 'react';
import './Confirmation.scss'

 const Confirmation = ( props ) => {
    return (<div className="pen-wrapper__inner" style={{position: "absolute", top:6, left: 80}}>

        <div className={"buton-cover button-slide-up " + props.active}>
          <button className="btn btn--primary button-slide-up__button" onClick={props.onConfirm}>Delete</button>
          <div className="button-set">
            <button className="btn btn--gray" onClick={props.onCancel}>Cancel</button>
            <button className="btn btn--gray-drk" onClick={props.onClick}>Confirm</button>
          </div>
        </div>

      </div>
    );
};

export default Confirmation;
