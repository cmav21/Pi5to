import React, {useState} from 'react';
import './Confirmation.scss'

 const Confirmation = ( props ) => {
    const [active, setActive] = useState('')

    console.log(props);
    

    return (<div className="pen-wrapper__inner" style={{ position: "absolute", top: 6, left: 218}}>

        <div className={"buton-cover button-slide-up " + active}>
          <button 
            className="btn btn--primary button-slide-up__button" 
            onClick={()=>setActive('is_active')}>{props.text}</button>
          <div className="button-set">
            <button className="btn btn--gray" onClick={()=>setActive('')}>Cancel</button>
            <button className="btn btn--gray-drk" onClick={props.onAccept}>Confirm</button>
          </div>
        </div>

      </div>
    );
};

export default Confirmation;
